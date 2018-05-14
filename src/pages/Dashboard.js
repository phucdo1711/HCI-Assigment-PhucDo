import React, { Component } from 'react';
import ContentWrapper from '../components/ContentWrapper';
import { observer, inject } from 'mobx-react';
import Calendar from '@atlaskit/calendar';
import Flex from '../components/Flex';
import styled from 'styled-components';

class Dashboard extends Component {
    render() {
        return (
            <ContentWrapper title="Dashboard">
                <Flex>
                <Announ column align="center">
                        <h1>Announcements</h1>
                    </Announ>
                    <Calendar
                                defaultDisabled={['2020-12-04']}
                                defaultPreviouslySelected={['2020-12-06']}
                                defaultSelected={['2020-12-08']}
                                defaultMonth={12}
                                defaultYear={2020}
                                innerProps={{
                                style: {
                                    border: '1px solid red',
                                    display: 'inline-block',
                                },
                                }}
                            
                            /> 
                    
                </Flex>

            </ContentWrapper>
        )
    }
}

const Announ = styled(Flex)`
    background: #FFFFFF;
    box-shadow: 0 4px 6px 0 rgba(23,43,77,0.32);
    border-radius: 3px;
    height: 272px;
    padding: 16px;
    margin-right: 16px;
    width: 50%;
`
export default Dashboard;