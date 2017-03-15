'use strict';

import React from 'react';
import {render} from 'react-dom';
import { Tab, Tabs } from 'react-bootstrap';
import Header from './components/header.jsx';





class MyComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      // Takes active tab from props if it is defined there
      activeTab: props.activeTab || 1
    };

    // Bind the handleSelect function already here (not in the render function)
    this.handleSelect = this.handleSelect.bind(this);
  }

  render() {
    return (
      <Tabs id="tabs" activeKey={this.state.activeTab} onSelect={this.handleSelect}>
        <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
        <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
      </Tabs>
    );
  }

  handleSelect(selectedTab) {
    // The active tab must be set into the state so that
    // the Tabs component knows about the change and re-renders.
    this.setState({
      activeTab: selectedTab
    });
  }
}

render(
  <div>
    <Header />
    <MyComponent />
  </div>,
  document.getElementById('container')
);
