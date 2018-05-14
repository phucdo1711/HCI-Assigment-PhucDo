import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Classes from '../pages/Classes';
import Dashboard from 'pages/Dashboard';
import Assignments from 'pages/Assignments';

export default class MainRouter extends Component {

  render() {
    return (
      <Router >
        <App>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/classes" component={Classes} />
            <Route exact path="/assignments" component={Assignments} />    
            <Route exact path="/assignments/:id" component={Assignments} />                                
          </Switch>
        </App>
      </Router>
    );
  }
}
