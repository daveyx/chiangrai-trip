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
        backgroundColor: 'grey'
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
        var minHeight = Math.round(window.innerWidth / 3.5) + 10;
        if (this.state.imgName) {
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
          this.setState({
            wrapperStyle: {
              backgroundColor: 'grey'
            },
            contentStyle: {
              backgroundImage: 'none',
              minHeight: minHeight + 'px'
            }
          });
        }
      } else {
        var minHeight = Math.round(window.innerWidth / 3) + 10;
        if (this.state.imgName) {
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
        } else {
          this.setState({
            wrapperStyle: {
              backgroundImage: 'none'
            },
            contentStyle: {
              backgroundColor: 'grey',
              minHeight: minHeight + 'px'
            }
          });
        }
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
