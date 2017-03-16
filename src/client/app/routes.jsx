'use strict';

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { useBasename } from 'history'
import App from './components/app.jsx';
import Home from './components/home.jsx';
import NotFound from './components/notFound.jsx';

export default class Routes extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return <Router history={useBasename(() => browserHistory)({ basename: BASENAME })}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
      </Route>
      <Route path="*" component={App}>
        <IndexRoute component={NotFound} />
      </Route>
    </Router>;
  }
}