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
    const email = ReactDOM.findDOMNode(this.refs.registrationemailField).value;
    const password = ReactDOM.findDOMNode(this.refs.registrationpasswordField).value;
    const username = ReactDOM.findDOMNode(this.refs.registrationusernameField).value;
    console.log(username, email, password);
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <Form id="registration-form" onSubmit={(e) => this.handleSubmit(e)}>
            <FormGroup controlId="registrationformControlsUsername">
              <ControlLabel>Username</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter username"
                ref="registrationusernameField"
              />
            </FormGroup>
            <FormGroup controlId="registrationformControlsEmail">
              <ControlLabel>Email address</ControlLabel>
              <FormControl
                type="email"
                placeholder="Enter email"
                ref="registrationemailField"
              />
            </FormGroup>
            <FormGroup controlId="registrationformControlsPassword">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                type="password"
                placeholder="Enter password"
                ref="registrationpasswordField"
              />
            </FormGroup>
              <Button ref="sendButton" type="submit">
                Register
              </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}
