"use strict";

import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../../css/day.css';
import EmptyDay from './emptyDay.jsx';

export default class Day extends Component {
  constructor(props) {
    super();
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    if (this.props.location.pathname === "day1") {
      console.log("get data...");
      var json = require('../data/day1.json');
      // if ( ! this.state.data) {
        this.setState({
          data: json.data,
          imgName: json.data.introImage
        }, function() {
            this.props.setBgImage(this.state.imgName);
          }
        );
    } else {
        this.setState({
          imgName: ''
        }, function() {
            this.props.setBgImage(this.state.imgName);
          }
        );
    }

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
  }

  render() {
    return (
        <main ref="content">
          <Grid fluid ref="day" className={'day ' + this.props.location.pathname} style={this.props.contentStyle}>
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
