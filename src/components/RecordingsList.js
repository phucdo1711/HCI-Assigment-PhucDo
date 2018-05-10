import React from 'react';

export default class RecordingsList extends React.Component {


    constructor(props) {
        super(props);
        this.apiPath="/recordings";
        this.cancelPath="/recordings";

        this.state = {
            recordings: []
        };
        var that = this;
        this.updateTable = this.updateTable.bind(this);
        setInterval(
            this.updateTable,
            2000);
    }

    componentDidMount() {
        this.updateTable();
    }

    updateTable() {
        let that = this;
        fetch(`http://www.mocky.io/v2/5af3cf313400007431770555`)
            .then(result=>result.json())
            .then(data=>that.setState({recordings: data.recordings}))
            .then(that.forceUpdate())
    }

    render() {

        return (
            <table id='table'>
                <tr>
                    <th>Status</th><th>Created</th><th>Info</th><th>Actions</th>
                </tr>
                {this.state.recordings.map(recording =>
                        <tr>
                            <td>{recording.status}</td>
                            <td>{new Date(recording.queued*1000).toLocaleDateString()} {new Date(recording.queued*1000).toLocaleTimeString()}</td>
                            <td>{ (recording.status == "FINISHED") ? <a href={recording.output_url}>Download the recording</a> : ""}</td>
                            <td>{ (recording.status == "QUEUED") ? <a href={this.cancelPath + "/" + recording.id}>Cancel recording</a> : ""}</td>
                        </tr>
                )}
            </table>
        );
    }

}
