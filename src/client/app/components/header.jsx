'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { IndexLink } from 'react-router';
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../../css/header.css';

export default class Header extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return  <div>
              <Menu />
            </div>;
  }
}

class Menu extends React.Component {
  constructor(props) {
    super();
    this.state = { navHeight: 50 };
    this.handleResize1 = this.handleResize1.bind(this);
  }

  handleResize1(e = null) {
    if (this.refs.navbar) {
      this.setState({ navHeight: ReactDOM.findDOMNode(this._navbar).offsetHeight });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize1);
    this.handleResize1();
  }

  render() {
    return  <div className="App" style={{paddingTop: this.state.navHeight}}>
              <Navbar ref="navbar" fluid collapseOnSelect ref={(e) => this._navbar = e} fixedTop >
                <Navbar.Header>
                  <Navbar.Brand>
                    <IndexLink to="/">Home</IndexLink>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav pullRight>
                    <LinkContainer to="/day1">
                      <NavItem>Day 1</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/day2">
                      <NavItem>Day 2</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/day3">
                      <NavItem>Day 3</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/day4">
                      <NavItem>Day 4</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/day5">
                      <NavItem>Day 5</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/day6">
                      <NavItem>Day 6</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/day7">
                      <NavItem>Day 7</NavItem>
                    </LinkContainer>
                    <NavItem>EN</NavItem>
                    <NavItem>TH</NavItem>
                    <NavItem>DE</NavItem>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>;
  }
}
