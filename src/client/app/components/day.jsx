"use strict";

import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../../css/day.css';
import EmptyDay from './emptyDay.jsx';
import Activity from './activity.jsx';

export default class Day extends Component {
  constructor(props) {
    super();
    this.state = {
      h1Style: {
        fontSize: '12px',
        marginTop: '30px'
      }
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize, false);
  }

  handleResize(e = null) {
    let h1size = Math.round(window.innerWidth / 21);
    let h1MarginTop = Math.round(window.innerWidth / 16) + 10;
    this.setState({
      h1Style: {
        fontSize: h1size + "px",
        marginTop: h1MarginTop + "px"
      }
    });
  }

  render() {
    var activityList = this.props.data.activities.map(function(activity, index){
      return <Activity key={index} data={activity} />;
    });
    return (
        <main ref="content">
          <Grid fluid ref="day" className={'day ' + this.props.pathname} style={this.props.contentStyle}>
            {this.props.pathname !== "day1" && this.props.pathname !== "day2" ? <EmptyDay pathname={this.props.pathname} />
            :
              <Row>
                <Col xs={12}>
                    <h1 className="text-center" style={this.state.h1Style}>
                      {this.props.data.introHeader}
                    </h1>
               </Col>
             </Row>
            }
          </Grid>
          {this.props.pathname !== "day1" && this.props.pathname !== "day2" ? null
          :
          <div>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h2 className="text-center">{this.props.data.introHeader2}</h2>
                 </Col>
                <Col xs={12}>
                  {this.props.data.introBody.map(function(data, index){
                    return <p key={index}>{data}</p>;
                  })}
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <div className="zoom-effect-container">
                    <div className="image-card">
                      <img src={this.props.data.introImages[0]} className="img-responsive center-block" />
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <div className="zoom-effect-container">
                    <div className="image-card">
                      <img src={this.props.data.introImages[1]} className="img-responsive center-block" />
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} smOffset={3} md={4} mdOffset={0}>
                  <div className="zoom-effect-container">
                    <div className="image-card">
                      <img src={this.props.data.introImages[2]} className="img-responsive center-block" />
                    </div>
                  </div>
                </Col>
              </Row>
            </Grid>
              {activityList}
            </div>
          }
        </main>
    );
  }
}
