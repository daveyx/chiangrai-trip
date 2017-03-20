"use strict";

import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../../css/day.css';
import BasePage from './basePage.jsx';
import EmptyDay from './emptyDay.jsx';

// const bgImage = {
//   imgName: BASENAME + "img/watrongkhun.jpg"
// }

const childStates = {data: {}};

export default class Day extends BasePage {
  constructor(props) {
    super('', childStates);
  }

  componentDidMountChild() {
    var data = require('../data/day1.json');
    this.setState({
      data: data
    });
    console.log(this.state.data);
    // read the day-data json:
    // if (this.state.gallery.length == 0) {
    //   axios.get("http://www.daveyx.ga/data/day1.json")
    //     .then(response => {
    //     this.setState({
    //       gallery: response.data.data
    //     });
    //   }).catch(function (error) {
    //     console.log("error axios-get1: " + error);
    //   });
    // }
  }

  handleResizeChild(e = null) {
  }

  renderContent() {
    return (
        <main ref="content">
          <Grid fluid ref="day" className={'day ' + this.props.location.pathname} style={this.state.contentStyle}>
            {this.props.location.pathname !== "day1" ? <EmptyDay pathname={this.props.location.pathname} />
            :
              <Row>
                <Col xs={12}>
                    <h1 className="text-center home-h1">
                      Day 1 of our trip - Exploring Chiang Rai
                    </h1>
               </Col>
             </Row>
            }
          </Grid>
          {this.props.location.pathname !== "day1" ? null
          :
            <Grid>
              <Row>
                <Col xs={12}>
                  <h2 className="text-center">Jaae and David experiencing the north of Thailand</h2>
                 </Col>
               </Row>
            </Grid>
          }
        </main>
    );
  }
}
