"use strict";

import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../../css/day.css';
import BasePage from './basePage.jsx';
import EmptyDay from './emptyDay.jsx';

const bgImage = {
  imgName: ""
}

const childStates = {data: {}};

export default class Day extends BasePage {
  constructor(props) {
    super(bgImage, childStates);
  }

  componentDidMountChild() {
    if (this.props.location.pathname == "day1") {
      var json = require('../data/day1.json');
      // if ( ! this.state.data) {
        this.setState({
          data: json.data,
          imgName: json.data.introImage
        });
      // }
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

      this.handleResize();
    }
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
                    <h1 className="text-center">
                      {this.state.data.introHeader}
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
                  <h2 className="text-center">{this.state.data.introHeader2}</h2>
                 </Col>
                <Col xs={12}>
                  <p>{this.state.data.introBody}</p>
                </Col>
               </Row>
            </Grid>
          }
        </main>
    );
  }
}
