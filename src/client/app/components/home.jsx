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
                <p className="text-center">Nice to welcome you here! Have fun on this webpage.</p>
                <p className="text-center">This page documents our trip to the north of Thailand from 25/02/2017 until 04/03/2017.</p>
                <p className="text-center">We started from Phuket on saturday, February, 25. Or flight from Phuket to Chiang Rai was scheduled at 9:25pm.</p>
                <p className="text-center">There is only one one airline operating the route from Phuket to Chiang Rai: VietJetAir.
                Flying directly to Chiang Rai with VietJetAir was much cheaper than go to Chiang Mai with AirAsia. Furthermore we would had to go from
                Chiang Mai to Chiang Rai first. But anyway we will visit Chiang Mai on this trip too...<br /><br /></p>
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
              <div className="col-xs-6">
                Chiang Rai in Google Maps
              </div>
              <div className="col-xs-6">
                About Chiang Rai
              </div>
            </div>
          </div>
        </main>
    );
  }
}
