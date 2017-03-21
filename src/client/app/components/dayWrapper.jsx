'use strict';

import React from 'react';
import Day from './day.jsx';

export default class DayWrapper extends React.Component {
  constructor(props) {
    super();

    this.state = {
      data: {}
    };
  }

  componentDidMount() {
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

  getData() {
    if (this.props.location.pathname !== "day1" && this.props.location.pathname !== "day2") {
      let json = require('../data/emptyDay.json');
      let data = {
          data: json.data,
          imgName: json.data.introImage
      };
      return data;
    } else {
      let tempData = localStorage.getItem(this.props.location.pathname);
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
        console.log("init: now: " + new Date(expires).toISOString());
        expires += 30000;
        console.log("init: expires: " + new Date(expires).toISOString());
        let json = require('../data/' + this.props.location.pathname + '.json');
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
    var data = this.getData();
    return(
          <div>
            <Day
              pathname={this.props.location.pathname}
              contentStyle={this.props.contentStyle}
              data={data.data}
              imgName={data.imgName}
              setBgImage={this.props.setBgImage}
              />
          </div>
        );
  }
}
