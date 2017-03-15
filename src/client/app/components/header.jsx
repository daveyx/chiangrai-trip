'use strict';

import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return  <header>
              Header
              <Menu></Menu>
            </header>
  }
}

class Menu extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return  <div>Menu</div>
  }
}
