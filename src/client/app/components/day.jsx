import React, { Component } from 'react';
import '../../css/day.css';
import BasePage from './basePage.jsx';

// const bgImage = {
//   imgName: BASENAME + "img/watrongkhun.jpg"
// }

const childStates = {};

export default class Day extends BasePage {
  constructor(props) {
    super('', childStates);
  }

  handleResizeChild(e = null) {
  }

  renderContent() {
    return (
        <main ref="content">
          <div ref="day" className="content" style={this.state.contentStyle}>
            <h1 className="text-center">
              {this.props.location.pathname} will be available soon, please check back later
            </h1>
            <div id="author" className="text-center">by <a href="http://www.daveyx.ga" title="daveyx">daveyx</a></div>
        </div>
      </main>
    );
  }
}
