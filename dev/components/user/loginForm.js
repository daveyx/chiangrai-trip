import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import axios from 'axios';
import Querystring from 'query-string';

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

    const data = {
      grant_type: 'password',
      Authorization: 'Basic ZGF2ZXl4OnNlY3JldA==',
      username: email,
      password: password
    };

    axios.post('http://localhost:6060/oauth/token', Querystring.stringify(data), {
    headers: { Authorization: 'Basic ZGF2ZXl4OnNlY3JldA=='}})
      .then(response => {
         console.log(response.data);
         const token = response.data.access_token;
         console.log('userresponse ' + response.data, token);
       })
       .catch((error) => {
         console.log('error ' + error);
       });
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <Form id="login-form" onSubmit={(e) => this.handleSubmit(e)} className="loginregister-form">
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
