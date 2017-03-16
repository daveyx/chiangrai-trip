'use strict';

import React from 'react';
import '../../css/app.css';

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
    }
  }

  render() {
    return  <div>
              { this.props.children }
            </div>;
  }
}
