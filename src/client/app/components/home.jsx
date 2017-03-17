'use strict';

import React from 'react';
import '../../css/home.css';
import BasePage from './basePage.jsx';

const bgImage = {
  imgName: BASENAME + "img/maejaedee.jpg"
}

export default class Home extends BasePage {
  constructor(props) {
    super(bgImage);
  }

  renderContent() {
    return (
        <main>
          <div ref="home" className="content container-fluid" style={this.state.contentStyle}>
              <h1 className="text-center">
                Trip to Chiang Rai with Jaae and David
              </h1>
              <div id="author" className="text-center">by <a href="http://www.daveyx.ga" title="daveyx">daveyx</a></div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h2 className="text-center">Jaae and David experiencing the north of Thailand</h2>
                <p className="text-center">Nice to welcome you here. Have fun on this webpage.</p>
              </div>
            </div>
          </div>
          <div className="container-fluid bgimg-1">
            <div className="caption">
              <h2 className="border">Amazing Thailand</h2>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h2 className="text-center">เชียงราย - Chiang Rai</h2>
              </div>
            </div>
          </div>
        </main>
    );
  }
}
