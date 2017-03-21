'use strict';

import React from 'react';
import Day from './day.jsx';

export default class DayWrapper extends React.Component {
  constructor(props) {
    super();
    let json = require('../data/emptyDay.json');
    let data = {
        data: json.data,
        imgName: json.data.introImage
    };
    this.state = {
      data: data
    };
  }

  componentDidMount() {
    let data = this.getData();
    this.setState({
      data: data
    }, function() {this.setBgImage()});
  }

  componentDidUpdate(nextProps) {
    if (nextProps.params.dayNumber !== this.props.params.dayNumber) {
      let data = this.getData();
      this.setState({
        data: data
      }, function() {this.setBgImage()});
    }
  }

  setBgImage() {
    this.props.setBgImage(this.state.data.imgName);
  }

  getData() {
    if (this.props.params.dayNumber !== "1" && this.props.params.dayNumber !== "2") {
      let json = require('../data/emptyDay.json');
      let data = {
          data: json.data,
          imgName: json.data.introImage
      };
      return data;
    } else {
      let tempData = localStorage.getItem("day" + this.props.params.dayNumber);
      let forceReload = false;
      if (tempData) {
        let expires = JSON.parse(tempData).expires;
        let now = new Date().getTime();
        if (expires < now) {
          forceReload = true;
          // console.log("forceReload " + new Date(expires).toISOString());
        }
      }
      if ( ! tempData || forceReload) {
        let expires = new Date().getTime();
        expires += 30000;
        let json = require('../data/day' + this.props.params.dayNumber + '.json');
        let day = {
            data: json.data,
            imgName: json.data.introImage,
            expires: expires
        };
        localStorage.setItem(this.props.location.pathname, JSON.stringify(day));
        return day;
      }

      let jsonFromLocalStorage = JSON.parse(tempData);
      return jsonFromLocalStorage;
    }
  }

  render() {
    let pathname = "day" + this.props.params.dayNumber;
    return(
          <div>
            <Day
              pathname={pathname}
              contentStyle={this.props.contentStyle}
              data={this.state.data.data}
              imgName={this.state.data.imgName}
              setBgImage={this.props.setBgImage}
              />
          </div>
        );
  }
}
