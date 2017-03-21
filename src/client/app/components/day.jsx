"use strict";

import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../../css/day.css';
import EmptyDay from './emptyDay.jsx';

export default class Day extends Component {
  constructor(props) {
    super();
  }

  // componentDidMount() {
  //   console.log("---> " + this.props.imgName)
  //   this.props.setBgImage(this.props.imgName);
  // }
  //
  // componentDidUpdate(nextProps) {
  //   if (nextProps.pathname !== this.props.pathname) {
  //     this.props.setBgImage(this.props.imgName);
  //   }
  // }

  render() {
    return (
        <main ref="content">
          <Grid fluid ref="day" className={'day ' + this.props.pathname} style={this.props.contentStyle}>
            {this.props.pathname !== "day1" && this.props.pathname !== "day2" ? <EmptyDay pathname={this.props.pathname} />
            :
              <Row>
                <Col xs={12}>
                    <h1 className="text-center">
                      introHeader:
                      {this.props.data.introHeader}
                    </h1>
               </Col>
             </Row>
            }
          </Grid>
          {this.props.pathname !== "day1" && this.props.pathname !== "day2" ? null
          :
            <Grid>
              <Row>
                <Col xs={12}>
                  <h2 className="text-center">{this.props.data.introHeader2}</h2>
                 </Col>
                <Col xs={12}>
                  <p>{this.props.data.introBody}</p>
                </Col>
               </Row>
            </Grid>
          }
        </main>
    );
  }
}
