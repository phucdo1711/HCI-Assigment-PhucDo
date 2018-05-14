import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Page from '@atlaskit/page';
import '@atlaskit/css-reset';
import { withRouter} from 'react-router-dom';
import Navigation from '../components/Navigation';
import NewAssignmentModal from '../components/NewAssignmentModal';
import { inject, observer } from 'mobx-react';

@withRouter
@inject('ui')
@observer
export default class App extends Component {

  render() {
    const { ui } = this.props;
    return (
        <Page
          navigation={<Navigation />}
        >
          {this.props.children}
          {ui.modal === 'CREATE_ASSIGNMENT' && 
          <NewAssignmentModal />
        }
        </Page>
    );
  }
}
