'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';

export default class BasePage extends Component {
  constructor(props) {
    super();

    this.state = {
      wrapperStyle: {
      },
      contentStyle: {
        backgroundImage: "url(" + props.imgName + ")",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      },
      imgName: props.imgName
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  handleResize(e = null) {
    if (this.refs.home) {
      if (window.innerWidth >= 992) {
        var minHeight = Math.round(window.innerWidth / 3.5);
        console.log(minHeight);
        this.setState({
          wrapperStyle: {
            backgroundImage: "url(" + this.state.imgName + ")",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          },
          contentStyle: {
            backgroundImage: 'none',
            minHeight: minHeight + 'px'
          }
        });
      } else {
        var minHeight = Math.round(window.innerWidth / 3);
        console.log(minHeight);
        this.setState({
          wrapperStyle: {
            backgroundImage: 'none'
          },
          contentStyle: {
            backgroundImage: "url(" + this.state.imgName + ")",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            minHeight: minHeight + 'px'
          }
        });
      }
    }
  }

  render() {
    return(
      <div id="wrapper" style={this.state.wrapperStyle}>
        <Header />
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}
