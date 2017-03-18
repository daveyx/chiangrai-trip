'use strict';

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { useBasename } from 'history'
import App from './components/app.jsx';
import Home from './components/home.jsx';
import Day from './components/day.jsx';
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
                <Route path="day1" component={Day} />
                <Route path="day2" component={Day} />
                <Route path="day3" component={Day} />
                <Route path="day4" component={Day} />
                <Route path="day5" component={Day} />
                <Route path="day6" component={Day} />
                <Route path="day7" component={Day} />
                <Route path="contact" component={Contact} />
              </Route>
              <Route path="*" component={App}>
                <IndexRoute component={NotFound} />
              </Route>
            </Router>;
  }
}
