'use strict';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/app.jsx';
import Home from './components/home.jsx';

export default (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
