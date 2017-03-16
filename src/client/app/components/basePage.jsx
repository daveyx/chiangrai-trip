'use strict';

import React, { Component } from 'react';
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
        backgroundRepeat: 'no-repeat',
        minHeight: '650px'
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
    if (this.refs.home || this.refs.day) {
    if (window.innerWidth >= 992) {
      this.setState({
        wrapperStyle: {
          backgroundImage: "url(" + this.state.imgName + ")",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          minHeight: '650px'
        },
        contentStyle: {
          backgroundImage: 'none'
        }
      });
    } else {
      this.setState({
        wrapperStyle: {
          backgroundImage: 'none'
        },
        contentStyle: {
          backgroundImage: "url(" + this.state.imgName + ")",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          minHeight: '650px'
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
