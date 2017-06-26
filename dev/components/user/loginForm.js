import React, { Component } from 'react';
import { Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Row>
          <Col xs={12}>
            <form>
              <FormGroup controlId="formControlsEmail">
                <ControlLabel>Email address</ControlLabel>
                <FormControl
                  type="email"
                  placeholder="Enter email"
                />
              </FormGroup>
              <FormGroup controlId="formControlsPassword">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="password"
                  placeholder="Enter password"
                />
              </FormGroup>
            </form>
          </Col>
        </Row>
      );
    }
  }
