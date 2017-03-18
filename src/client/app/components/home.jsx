'use strict';

import React from 'react';
import '../../css/home.css';
import BasePage from './basePage.jsx';
import {
  Row
} from 'react-bootstrap';
import GMap from './GoogleMaps';

const bgImage = {
  imgName: BASENAME + "img/maejaedee.jpg"
}

var initialCenter = { lng: 99.8325, lat: 19.90858 };

export default class Home extends BasePage {
  constructor(props) {
    super(bgImage);
  }

  handleResizeChild(e = null) {
  }

  renderContent() {
    return (
        <main ref="content">
          <div ref="home" className="content container-fluid" style={this.state.contentStyle}>
              <h1 className="text-center home-h1">
                Trip to Chiang Rai with Jaae and David
              </h1>
              <div id="author" className="text-center">by <a href="http://www.daveyx.ga" title="daveyx">daveyx</a></div>
          </div>
          <div className="container">
            <Row>
              <div className="col-xs-12">
                <h2 className="text-center">Jaae and David experiencing the north of Thailand</h2>
                <p className="text-center">Nice to welcome you here! Have fun on this webpage.</p>
                <p className="text-center">This page documents our trip to the north of Thailand from 25/02/2017 until 04/03/2017.</p>
                <p className="text-center">We started from Phuket on saturday, February, 25. Or flight from Phuket to Chiang Rai was scheduled at 9:25pm.</p>
                <p className="text-center">There is only one one airline operating the route from Phuket to Chiang Rai: VietJetAir.
                Flying directly to Chiang Rai with VietJetAir was much cheaper than go to Chiang Mai with AirAsia. Furthermore we would had to go from
                Chiang Mai to Chiang Rai first. But anyway we will visit Chiang Mai on this trip too...<br /><br /></p>
              </div>
            </Row>
          </div>
          <div className="container-fluid bgimg-1">
            <div className="caption">
              <h2 className="border">Amazing Thailand</h2>
            </div>
          </div>
          <div className="container">
            <Row>
              <div className="col-xs-12">
                <h2 className="text-center">เชียงราย - Chiang Rai</h2>
              </div>
              <div className="col-xs-12 col-md-6">
                Chiang Rai in Google Maps
                <div className="map">
                  <GMap initialCenter={initialCenter} />
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                About Chiang Rai
              </div>
            </Row>
            <Row>
              <div className="col-xs-12">
                <h2 className="text-center">Our trip from Phuket to Chiang Rai starts...</h2>
              </div>
            </Row>
          </div>
        </main>
    );
  }
}
