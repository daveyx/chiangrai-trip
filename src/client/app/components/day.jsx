import React, { Component } from 'react';
import '../../css/day.css';
import BasePage from './basePage.jsx';

const bgImage = {
  imgName: "../img/watrongkhun.jpg"
}

export default class Day extends BasePage {
  constructor(props) {
    super(bgImage);
  }

  renderContent() {
    return (
        <div ref="day" className="content" style={this.state.contentStyle}>
          <h1 className="text-center">
            THIS IS A DAY COMPONENT
          </h1>
          <div id="author" className="text-center">by <a href="http://www.daveyx.ga" title="daveyx">daveyx</a></div>
      </div>
    );
  }
}
