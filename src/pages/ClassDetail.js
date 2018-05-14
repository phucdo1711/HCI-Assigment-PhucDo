import React, { Component } from 'react';
import ContentWrapper from '../components/ContentWrapper';
import {withRouter} from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import ClassStore from '../stores/ClassStore';
import { observable } from 'mobx';
import { BreadcrumbsStateless, BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import Tabs from '@atlaskit/tabs';
import ListStudent from 'components/ListStudent';
import Lecture from 'components/Lecture';

type Props = {
    match: Object,
    classes: ClassStore
}

const tabs = [
    {
        label: 'Lecture',
        content: <Lecture />,
    }, {
        label: 'Students',
        content: <ListStudent />,
    }
];


@inject('classes')
@observer
class ClassDetail extends Component {
    props: Props;

    state = {
        selected: tabs[0]
    };
    
    @observable cl ;
    async componentDidMount() {
        const { classes, match} = this.props;
        const id = match.params.classId;
        this.cl =  classes.getClass(id)
    }

    renderBreadcrumbs() {
        const { history, match} = this.props;
        return (
            <BreadcrumbsStateless >
                <BreadcrumbsItem
                    text="Classes"
                    onClick={() => history.push(`/classes`)}
                />
            </BreadcrumbsStateless>
        )
    }   

    handleUpdate = (selected: TabData) => {
        // this.props.humans.changeTab(selected.type)
        this.setState({ selected });
    }
    render() {
        if (!this.cl) return null
        return (
            <ContentWrapper title={`${this.cl.name} - ${this.cl.code}`} breadcrumbs={this.renderBreadcrumbs()}>
                <Tabs onSelect={this.handleUpdate} selected={this.state.selected} tabs={tabs} />
            </ContentWrapper>
        )
    }
}

export default withRouter(ClassDetail);