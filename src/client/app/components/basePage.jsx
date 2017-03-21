'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class BasePage extends Component {
  constructor(props, childStates) {
    super();
    childStates.contentStyle = {};
    childStates.imgName = props.imgName;
    childStates.wrapperStyle = {};
    this.state = childStates;
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.componentDidMountChild();
  }

  componentDidMountChild() {
  }

  handleResize(e = null) {
    if (this.refs.content) {
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
            },
            contentStyle: {
              backgroundImage: 'none',
              minHeight: minHeight + 'px',
              backgroundColor: 'grey'
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
    this.handleResizeChild();
  }

  render() {
    return(
      <div id="wrapper" style={this.state.wrapperStyle}>
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}
