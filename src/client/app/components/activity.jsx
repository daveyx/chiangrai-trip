"use strict";

import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import GMap from './GoogleMaps';
import Gallery from './gallery.jsx'

export default class Activity extends Component {
  constructor(props) {
    super();
    this.state = {
    };
  }

  shouldComponentUpdate(nextProps) {
    return this.props.data != nextProps.data;
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <h2>{this.props.data.activity.activityHeader}</h2>
        </Col>
        <Col xs={12} md={6}>
          {this.props.data.activity.position.coordinates.lng > 0 && this.props.data.activity.position.coordinates.lat > 0 ?
            <div>
              <h3>{this.props.data.activity.position.header}</h3>
              <div className="map">
                <GMap initialCenter={this.props.data.activity.position.coordinates} zoom={this.props.data.activity.position.zoom} />
              </div>
            </div>
          : <p>Google Maps not available</p>
          }
        </Col>
        <Col xs={12} md={6}>
          <h3>{this.props.data.activity.activityHeader2}</h3>
          {this.props.data.activity.activityBody.map(function(data, index){
            return <p key={index}>{data}</p>;
          })}
        </Col>
        <Col xs={12}>
          <h2 className="text-center">{this.props.data.activity.galleryHeader}</h2>
          <p>(click on the bottom right for full screen mode)<br />(click the 'play' button on the bottom left for a image show)</p>
          <Gallery images={this.props.data.activity.images} />
        </Col>
      </Row>
    );
  }
}
