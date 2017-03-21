'use strict';

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { useBasename } from 'history'
import App from './components/app.jsx';
import Home from './components/home.jsx';
import DayWrapper from './components/dayWrapper.jsx';
import NotFound from './components/notFound.jsx';
import Contact from './components/contact.jsx';

export default class Routes extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return  <Router history={useBasename(() => browserHistory)({ basename: BASENAME })}>
              <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="day1" component={DayWrapper} />
                <Route path="day2" component={DayWrapper} />
                <Route path="day3" component={DayWrapper} />
                <Route path="day4" component={DayWrapper} />
                <Route path="day5" component={DayWrapper} />
                <Route path="day6" component={DayWrapper} />
                <Route path="day7" component={DayWrapper} />
                <Route path="contact" component={Contact} />
              </Route>
              <Route path="*" component={App}>
                <IndexRoute component={NotFound} />
              </Route>
            </Router>;
  }
}
