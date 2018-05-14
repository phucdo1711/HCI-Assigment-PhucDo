import React, { Component } from 'react';
import ContentWrapper from '../components/ContentWrapper';
import DynamicTable from '@atlaskit/dynamic-table';
import Button, { ButtonGroup } from '@atlaskit/button';
import EditIcon from '@atlaskit/icon/glyph/edit';
import TrashIcon from '@atlaskit/icon/glyph/trash';
import Flex from '../components/Flex';
import {  inject,observer} from 'mobx-react';
import AssignmentStore from '../stores/AssignmentStore';
import UiStore from '../stores/UiStore';

type Props = {
    assignments : AssignmentStore,
    ui: UiStore
}

@inject('assignments', 'ui')
@observer
class Assignments extends Component {
    props: Props;

    onDelete = (ass) => {
        const {assignments} = this.props;        
        const confirm = window.confirm(`are you sure to delete ${ass.name} from ${ass.subject}`);
        if(confirm) assignments.deleteAss(ass.id)
    }
    
    renderRows(): Array {
        const {assignments, ui} = this.props;
        var rows = [];
        assignments.getAssignments.forEach((ass) => {
            var row = {
                cells: [
                    {
                        key: 1,
                        content: 
                                <Button appearance='link' >{ass.name}</Button>
                      
                    }, {
                        key: 2, 
                        content: ass.subject
                    }, {
                        key: 3,
                        content: ass.deadline
                    }, {
                        key: 4,
                        content: <ButtonGroup>
                            <Button
                                
                                iconBefore={< EditIcon />} />
                                <Button
                                        onClick={() => this.onDelete(ass)}
                                        iconBefore={< TrashIcon />} />
                        </ButtonGroup>
                    }
                ],
                key: ass.id
            }
            rows.push(row);
        });
        return rows;
    }

    renderHead() {
        const head = {
            cells: [
                {
                    key: 1,
                    content: 'Name',
                    shouldTruncate: false
                }, 
                {
                    key: 2,
                    content: 'Subject',
                    shouldTruncate: true
                },
                {
                    key: 3,
                    content: 'Deadline',
                    shouldTruncate: true
                }, {
                    key: 4,
                    content: 'Actions',
                    shouldTruncate: true
                },
            ]
        }
        return head;
    }

    renderActions(){
        const { ui } = this.props;
        return <Button appearance="primary" onClick={() => ui.openModal('CREATE_ASSIGNMENT')}>New assignment</Button>
    }

    render(){
        return (
            <ContentWrapper title="Assignments"> 
            <Flex justify="flex-end">{this.renderActions()}</Flex>
                 <DynamicTable 
                    head={this.renderHead()}
                    rows={this.renderRows()}
                    defaultPage={1}
                    isFixedSize
                />
            </ContentWrapper>
        )
    }
}

export default Assignments;