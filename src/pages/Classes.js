import React, { Component } from 'react';
import ContentWrapper from '../components/ContentWrapper';
import DynamicTable from '@atlaskit/dynamic-table';
import Button from '@atlaskit/button';

const listClasses = [
    {name: 'Human Computer Interaction', code: 'HCI', term: 'Spring 2018', studentNum: 120},
    {name: 'Human Computer Interaction', code: 'HCI-RELEARN', term: 'Relearn - Spring 2018', studentNum: 120},
    {name: 'Web Technology', code: 'WEB', term: 'Spring 2018', studentNum: 120},
    {name: 'Special Subject 2 - 6C15', code: 'SS2', term: 'Spring 2018', studentNum: 30},
    {name: 'Project Management', code: 'PJM', term: 'Spring 2018', studentNum: 120},
    {name: 'Information System', code: 'IST', term: 'Spring 2018', studentNum: 102},    
]

class Classes extends Component {
    renderRows(): Array {
        var rows = [];
        listClasses.forEach((c) => {
            var row = {
                cells: [
                    {
                        key: 1,
                        content: <Button appearance='link' >{c.name}</Button>
                    
                    }, {
                        key: 2, 
                        content: c.code
                    }, {
                        key: 3,
                        content: c.term
                    }, {
                        key: 4,
                        content: c.studentNum
                    }
                ],
                key: c.code
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
                    content: 'Code',
                    shouldTruncate: true
                },
                {
                    key: 3,
                    content: 'Term',
                    shouldTruncate: true
                }, {
                    key: 4,
                    content: 'Number of student',
                    shouldTruncate: true
                },
            ]
        }
        return head;
    }


    render() {
        return (
            <ContentWrapper title="Classes" >
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

export default Classes;