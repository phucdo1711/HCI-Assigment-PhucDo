import React, { Component } from 'react';
import ContentWrapper from '../components/ContentWrapper';
import DynamicTable from '@atlaskit/dynamic-table';
import Button from '@atlaskit/button';
import { inject, observer } from 'mobx-react';
import ClassStore from '../stores/ClassStore';
import {withRouter} from 'react-router-dom';
import { BreadcrumbsStateless, BreadcrumbsItem } from '@atlaskit/breadcrumbs';

type Props = {
    classes: ClassStore,
    history: Object
}

@observer
@inject('classes')
class Classes extends Component {
    props: Props
    
    renderRows(): Array {
        const { classes, history} = this.props;
        var rows = [];
        classes.getClasses.forEach((c) => {
            var row = {
                cells: [
                    {
                        key: 1,
                        content: <Button appearance='link' onClick={() => history.push(`/classes/${c.id}`)} >{c.name}</Button>
                    
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
                key: c.id
            }
            rows.push(row);
        });
        return rows;
    }

    renderBreadcrumbs() {
        const { history } = this.props;
        return (
            <BreadcrumbsStateless >
                <BreadcrumbsItem
                    text="Classes"
                    onClick={() => history.push(`/classes`)}
                />
            </BreadcrumbsStateless>
        )
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
            <ContentWrapper title="Classes" breadcrumbs={this.renderBreadcrumbs()}>
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

export default withRouter(Classes);