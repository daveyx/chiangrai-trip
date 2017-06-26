import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const email = ReactDOM.findDOMNode(this.refs.emailField).value;
    const password = ReactDOM.findDOMNode(this.refs.passwordField).value;
    const username = ReactDOM.findDOMNode(this.refs.usernameField).value;
    console.log(username, email, password);
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <Form id="login-form" onSubmit={(e) => this.handleSubmit(e)}>
            <FormGroup controlId="formControlsUsername">
              <ControlLabel>Username</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter username"
                ref="usernameField"
              />
            </FormGroup>
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
