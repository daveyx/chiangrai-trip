import React, { Component } from 'react';
import ReactDOM from'react-dom';
import { Row, Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const email = ReactDOM.findDOMNode(this.refs.emailField).value;
    const password = ReactDOM.findDOMNode(this.refs.passwordField).value;
    console.log(email, password);
  }

  render() {
    return (
        <Row>
          <Col xs={12}>
            <Form id="login-form" onSubmit={(e) => this.handleSubmit(e)}>
              <FormGroup controlId="formControlsEmail">
                <ControlLabel>Email address</ControlLabel>
                <FormControl
                  type="email"
                  placeholder="Enter email"
                  ref="emailField"
                />
              </FormGroup>
              <FormGroup controlId="formControlsPassword">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="password"
                  placeholder="Enter password"
                  ref="passwordField"
                />
              </FormGroup>
                <Button ref="sendButton" type="submit">
                  Login
                </Button>
            </Form>
          </Col>
        </Row>
      );
    }
  }
