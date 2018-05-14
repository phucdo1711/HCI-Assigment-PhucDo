import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Page from '@atlaskit/page';
import '@atlaskit/css-reset';

import Navigation from '../components/Navigation';

export default class App extends Component {

  render() {
    return (
        <Page
          navigation={<Navigation />}
        >
          {this.props.children}
        </Page>
    );
  }
}
