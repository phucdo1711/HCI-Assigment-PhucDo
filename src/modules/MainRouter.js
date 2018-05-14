import PropTypes from 'prop-types';
import React, { Component } from 'react';
//store
import { Provider } from 'mobx-react';
import stores from '../stores';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Classes from '../pages/Classes';
import Dashboard from 'pages/Dashboard';
import Assignments from 'pages/Assignments';
import ClassDetail from 'pages/ClassDetail';

export default class MainRouter extends Component {

  render() {
    return (
      <Provider {...stores}>
        <Router >
          <App>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/classes" component={Classes} />
              <Route exact path="/assignments" component={Assignments} />    
              <Route exact path="/classes/:classId" component={ClassDetail} />                                
            </Switch>
          </App>
        </Router>
      </Provider>
    );
  }
}
