'use strict';

import React from 'react';
import Header from './header.jsx';
import '../../css/app.css';

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
    }
  }

  render() {
    return  <div>
              <Header />
              { this.props.children }
            </div>;
  }
}
