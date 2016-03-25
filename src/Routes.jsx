import React from 'react';
import {Route, Router, browserHistory} from 'react-router';
import Root from './root/Root.jsx';

export const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Root} />
  </Router>
);
