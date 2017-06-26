/* global BASENAME */
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { useBasename } from 'history';
import App from './containers/app.js';
import DayWrapper from './containers/dayWrapper.js';
import Contact from './components/contact';
import Login from './components/user/login';

export default class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Router history={useBasename(() => browserHistory)({ basename: BASENAME })}>
        <Route path="/" component={App}>
          <IndexRoute component={DayWrapper} />
          <Route path="day/:dayNumber" component={DayWrapper} />
          <Route path="contact" component={Contact} />
          <Route path="/user/login" component={Login} />
        </Route>
      </Router>
    );
  }
}
