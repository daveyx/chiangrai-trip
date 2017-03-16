import React, { Component } from 'react';
import '../../css/home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="lander">
            <h1 className="text-center">
              Trip to Chiang Rai with Jaae and David
            </h1>
        </div>
        <div id="author" className="text-center">by <a href="http://www.daveyx.ga" title="daveyx">daveyx</a></div>
      </div>
    );
  }
}
