import React, { Component } from 'react';
import ContentWrapper from '../components/ContentWrapper';
import DynamicTable from '@atlaskit/dynamic-table';
import Button, { ButtonGroup } from '@atlaskit/button';
import EditIcon from '@atlaskit/icon/glyph/edit';
import TrashIcon from '@atlaskit/icon/glyph/trash';
import Flex from '../components/Flex';

const listAss = [
    {name: 'Assignment 2' , subject : 'HCI', deadline: "24/5/2018" },
    {name: 'Assignment 1' , subject : 'HCI', deadline: "24/5/2018" },
    {name: 'Clone website 2' , subject : 'HCI', deadline: "24/5/2018" },
    {name: 'Assignment 2' , subject : 'HCI', deadline: "24/5/2018" },
    {name: 'Assignment 2' , subject : 'HCI', deadline: "24/5/2018" },    
]

class Assignments extends Component {
    renderRows(): Array {
        var rows = [];
        listAss.forEach((ass,i) => {
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
                                // onClick={() => }
                                iconBefore={< EditIcon />} />
                                <Button
                                        // onClick={() => this.onDelete(group)}
                                        iconBefore={< TrashIcon />} />
                        </ButtonGroup>
                    }
                ],
                key: i
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
        return <Button appearance="primary">New assignment</Button>
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