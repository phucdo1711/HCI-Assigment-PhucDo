import React, { Component } from 'react';
import DynamicTable from '@atlaskit/dynamic-table';
import Avatar from '@atlaskit/avatar';
import Flex from './Flex';
import Button from '@atlaskit/button';
import styled from 'styled-components';

const listStudent = [
    {ava: 'https://scontent.fhan1-1.fna.fbcdn.net/v/t1.0-9/19756633_1440398519379842_4340365012676281084_n.jpg?_nc_cat=0&oh=b3a459ea994d97261d585f9e333e70f6&oe=5B50E5E1',name: 'Đỗ  Thành Phúc', midterm: 8.0, final: 8.2 , total: 8},
    {ava: 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/14479650_655076027988396_6111976334380876771_n.jpg?_nc_cat=0&oh=b8cf024b4e2d9e2bad7e34fd48c20b91&oe=5B893D95',name: 'Trần Quang Huy ', midterm: 8.0, final: 8.2 , total: 8},
    {ava: 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-1/32290812_1838946746163917_9140023682465267712_n.jpg?_nc_cat=0&oh=f3c5beb4019107bb7715a5ca3a0f3d92&oe=5B8439EE',name: 'Nguyễn Huy Hiệp', midterm: 8.0, final: 8.2 , total: 8},
    {ava: 'https://scontent.fhan1-1.fna.fbcdn.net/v/t1.0-9/19756633_1440398519379842_4340365012676281084_n.jpg?_nc_cat=0&oh=b3a459ea994d97261d585f9e333e70f6&oe=5B50E5E1',name: 'Bùi Đức Quang', midterm: 8.0, final: 8.2 , total: 8},
    {ava: 'https://scontent.fhan1-1.fna.fbcdn.net/v/t1.0-9/19756633_1440398519379842_4340365012676281084_n.jpg?_nc_cat=0&oh=b3a459ea994d97261d585f9e333e70f6&oe=5B50E5E1',name: 'Lung Thị Linh', midterm: 8.0, final: 8.2 , total: 8},
    {ava: 'https://scontent.fhan1-1.fna.fbcdn.net/v/t1.0-9/19756633_1440398519379842_4340365012676281084_n.jpg?_nc_cat=0&oh=b3a459ea994d97261d585f9e333e70f6&oe=5B50E5E1',name: 'Lung Thị Mai', midterm: 8.0, final: 8.2 , total: 8},  
    {ava: 'https://scontent.fhan1-1.fna.fbcdn.net/v/t1.0-9/19756633_1440398519379842_4340365012676281084_n.jpg?_nc_cat=0&oh=b3a459ea994d97261d585f9e333e70f6&oe=5B50E5E1',name: 'Lung Thị Trang', midterm: 8.0, final: 8.2 , total: 8},    
    {ava: 'https://scontent.fhan1-1.fna.fbcdn.net/v/t1.0-9/19756633_1440398519379842_4340365012676281084_n.jpg?_nc_cat=0&oh=b3a459ea994d97261d585f9e333e70f6&oe=5B50E5E1',name: 'Lung Thị Quang', midterm: 8.0, final: 8.2 , total: 8},        
]

class ListStudent extends Component {

    renderRows(): Array {
        var rows = [];
        listStudent.forEach((s) => {
            var row = {
                cells: [
                    {
                        key: 1,
                        content: <Flex align="center"> 
                                <Avatar src={s.ava}/>
                                <Button appearance='link' >{s.name}</Button>
                            </Flex>
                    }, {
                        key: 2, 
                        content: s.midterm
                    }, {
                        key: 3,
                        content: s.final
                    }, {
                        key: 4,
                        content: s.total
                    }
                ],
                key: s.name
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
                    content: 'Midterm grade',
                    shouldTruncate: true
                },
                {
                    key: 3,
                    content: 'Final grade',
                    shouldTruncate: true
                }, {
                    key: 4,
                    content: 'Total',
                    shouldTruncate: true
                },
            ]
        }
        return head;
    }

    render(){
        return (
            <Container>
                <DynamicTable 
                    head={this.renderHead()}
                    rows={this.renderRows()}
                    defaultPage={1}
                    isFixedSize
                />
            </Container>
        )
    }
}

const Container = styled.div`
    width: 100%;
    height: 100%;
`

export default ListStudent;