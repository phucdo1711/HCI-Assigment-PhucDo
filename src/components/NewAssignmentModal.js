import React, { Component } from 'react';
import Modal from '@atlaskit/modal-dialog';
import { inject } from 'mobx-react';
import UiStore from '../stores/UiStore';
import TextField from '@atlaskit/field-text';
import Select from '@atlaskit/select'; 
import styled from 'styled-components';

@inject("ui", "assignments", 'classes')
class NewAssignmentModal extends Component {
    state = {
        name: '',
        deadline: '',
        cl: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onSubmit = () => {
        const {name, deadline, cl} = this.state
        const { ui , assignments} = this.props;
        assignments.addAss({name, deadline, subject: cl, id: Math.floor(Math.random() * 1000)});
        ui.closeModal()
    }
    
    render() {
        const { ui, assignments, classes} = this.props;
        const actions = [
            { text: 'Submit', onClick: this.onSubmit  },
            { text: 'Close', onClick: ui.closeModal },
        ];

        const listClasses = classes.getClasses.map((cl) => {
            return {label: cl.name, value: cl.code}
        })

        const { name, deadline} = this.state
        return (
            <Modal autoFocus actions={actions} onClose={ui.closeModal} heading="Create a new assignment">
                <TextField 
                    autoFocus 
                    label="Assignment name" 
                    shouldFitContainer 
                    value={name}
                    name="name"
                    onChange={this.handleChange}
                />
                <Label>Class</Label>
                <Select
                    className="react-select"
                    options={listClasses}
                    placeholder="Choose a class"
                    label="Class"
                    onChange={e => this.setState({cl: e.value})}
                />
                <TextField 
                    autoFocus 
                    label="Deadline" 
                    shouldFitContainer  
                    value={deadline}
                    name="deadline"
                    onChange={this.handleChange}
                />
                
            </Modal>
        )
    }
}

const Label = styled.div`
    color: #6B778C;
    font-size: 12px;
    font-weight: 600;
    margin-top: 8px;
`

export default NewAssignmentModal;