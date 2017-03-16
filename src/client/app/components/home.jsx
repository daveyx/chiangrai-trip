'use strict';

import React from 'react';
import '../../css/home.css';
import BasePage from './basePage.jsx';

const bgImage = {
  imgName: "../img/maejaedee.jpg"
}

export default class Home extends BasePage {
  constructor(props) {
    super(bgImage);
  }

  renderContent() {
    return (
        <div ref="home" className="content" style={this.state.contentStyle}>
            <h1 className="text-center">
              Trip to Chiang Rai with Jaae and David
            </h1>
            <div id="author" className="text-center">by <a href="http://www.daveyx.ga" title="daveyx">daveyx</a></div>
        </div>
    );
  }
}
