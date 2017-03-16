'use strict';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/app.jsx';
import Home from './components/home.jsx';
import NotFound from './components/notFound.jsx';

export default (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
    { /* Finally, catch all unmatched routes */ }
    <Route path="*" component={App}>
      <IndexRoute component={NotFound} />
    </Route>
  </Router>
);
