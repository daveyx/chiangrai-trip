'use strict';

import React from 'react';
import Header from './header.jsx';

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
    }
  }

  render() {
    return  <div>
              <Header />
              <div>
                { this.props.children }
              </div>
            </div>;
  }
}
