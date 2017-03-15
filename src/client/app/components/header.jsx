'use strict';

import React from 'react';
import { IndexLink } from 'react-router';
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return  <div>
              <Menu />
              <div>
                <h1>
                  Chiang Rai trip Jaae and David
                </h1>
              </div>
              <div id="author">by <a href="http://www.daveyx.ga" title="daveyx">daveyx</a></div>
            </div>;
  }
}

class Menu extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return  <div className="App container-fluid">
              <Navbar fluid collapseOnSelect>
                <Navbar.Header>
                  <Navbar.Brand>
                    <IndexLink to="/">Scratch</IndexLink>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav pullRight>
                    <LinkContainer to="/signup">
                      <NavItem>Signup</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <NavItem>Login</NavItem>
                    </LinkContainer>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>;
  }
}
