'use strict';

import React from 'react';
import BasePage from './basePage.jsx';
import '../../css/contact.css';
import {
  Row,
  Col,
  Grid
} from 'react-bootstrap';

const bgImage = {
  imgName: BASENAME + "img/contact.jpg"
};

const peter = {
  imgName: BASENAME + "img/PETER.jpg"
};

const localProps = {
  h1Style: {
    fontSize: '12px',
    marginTop: '20px'
  }
};

export default class Home extends BasePage {
  constructor(props) {
    super(bgImage, localProps);
  }

  handleResizeChild(e = null) {
    if (this.refs.contact) {
      let h1size = Math.round(window.innerWidth / 21);
      let h1MarginTop = Math.round(window.innerWidth / 16);
      this.setState({
        h1Style: {
          fontSize: h1size + "px",
          marginTop: h1MarginTop + "px"
        }
      });
    }
  }

  renderContent() {
    return (
        <main className="contact" ref="content">
          <Grid ref="contact" className="content" fluid style={this.state.contentStyle}>
              <h1 className="text-center contact-h1" style={this.state.h1Style}>
                Contact us and say 'hello'!
              </h1>
          </Grid>
          <Grid>
            <Row>
              <Col xs={12}>
                <h2 className="text-center">Contact form</h2>
              </Col>
            </Row>
          </Grid>
        </main>
      );
  }
}
