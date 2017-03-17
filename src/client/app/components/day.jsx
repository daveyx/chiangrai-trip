import React, { Component } from 'react';
import '../../css/day.css';
import BasePage from './basePage.jsx';

const bgImage = {
  imgName: BASENAME + "img/watrongkhun.jpg"
}

export default class Day extends BasePage {
  constructor(props) {
    super(bgImage);
  }

  renderContent() {
    console.log(this.props.location.pathname);
    return (
        <div ref="home" className="content" style={this.state.contentStyle}>
          <h1 className="text-center">
            THIS IS A DAY COMPONENT {this.props.location.pathname}
          </h1>
          <div id="author" className="text-center">by <a href="http://www.daveyx.ga" title="daveyx">daveyx</a></div>
      </div>
    );
  }
}
