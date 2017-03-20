"use strict";

import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../../css/day.css';
import BasePage from './basePage.jsx';
import EmptyDay from './emptyDay.jsx';

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
          <Grid fluid ref="day" className="content" style={this.state.contentStyle}>
            {this.props.location.pathname !== "day1" ? <EmptyDay pathname={this.props.location.pathname} />
            :
              <Row>
                <Col xs={12}>
                  <h1 className="text-center home-h1">
                   peter
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
