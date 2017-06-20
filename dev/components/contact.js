'use strict';

import React, { Component } from 'react';
import '../css/contact.css';
import Script from 'react-load-script';
import {
  Row,
  Col,
  Grid,
  Form,
  ControlLabel,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';

const bgImage = 'https://www.daveyx.ga/images/crtrip/contact.jpg';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      subjectValue: '',
      messageValue: '',
      sendButtonText: 'Send'
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeSubject = this.handleChangeSubject.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.setBgImage(bgImage);
  }

  isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.isEmail(this.state.emailValue) === false) {
      alert('please provide a valid E-Mail address');
      return null;
    }
    this.setState({
      sendButtonText: 'sending...'
    });
    emailjs.init('user_cHwOetRKbvaczpM99yjXl');

    let service_id = 'daveyxga_gmail_com';
    let template_id = 'daveyx_ga_email_template';
    let params = {
      email: this.state.emailValue,
      subject: this.state.subjectValue,
      messagel: this.state.messageValue
    };
    emailjs.send(service_id, template_id, params)
      .then(() => {
         alert('Sent!');
         this.setState({
           sendButtonText: 'Send'
         });
       }, (err) => {
         alert('Send email failed!\r\n Response:\n ' + JSON.stringify(err));
         this.setState({
           sendButtonText: 'Send'
         });
      });
  }

  handleChangeEmail(event) {
    this.setState({emailValue: event.target.value});
    console.log(this.state.emailValue);
  }

  handleChangeSubject(event) {
    this.setState({subjectValue: event.target.value});
    console.log(this.state.subjectValue);
  }

  handleChangeMessage(event) {
    this.setState({messageValue: event.target.value});
  }

  handleScriptCreate() {
    this.setState({
      showSendButton: false
    });
  }

  handleScriptError() {
    this.setState({
      showSendButton: false
    });
  }

  handleScriptLoad() {
    this.setState({
      showSendButton: false
    });
  }

  render() {
    const url = 'https://cdn.emailjs.com/dist/email.min.js';
    return (
      <main className="contact" ref="content">
        <Script
          url={url}
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <Grid ref="contact" className="content" fluid style={this.props.contentStyle}>
            <h1 className="text-center contact-h1">
              Contact us and say 'hello'!
            </h1>
        </Grid>
        <Grid>
          <p className="contactInfo">Interested in Phuket, Thailand, Webdevelopment or Softwaredevelopment?<br />
          Contact me! I will respond quickly.</p>
          <div className="panel panel-default">
            <Form id="contact-form" onSubmit={(e) => this.handleSubmit(e)}>
              <h2 className="text-center panel-heading">Contact form</h2>
              <FormGroup controlId="formHorizontalEmail">
                <ControlLabel>
                  E-Mail*:
                </ControlLabel>
                <FormControl type="email" placeholder="Email" onChange={(e) => this.handleChangeEmail(e)} />
              </FormGroup>
              <FormGroup controlId="formHorizontalSubject">
                <ControlLabel>
                  Subject:
                </ControlLabel>
                <FormControl type="text" placeholder="Subject" onChange={(e) => this.handleChangeSubject(e)} />
              </FormGroup>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>
                  Message:
                </ControlLabel>
                  <FormControl componentClass="textarea" placeholder="Message" onChange={(e) => this.handleChangeMessage(e)} />
              </FormGroup>
              <FormGroup>
                <ControlLabel>
                </ControlLabel>
                { ! this.state.showSendButton ? null :
                  <Button ref="sendButton" type="submit" style={{'float': 'left'}}>
                    {this.state.sendButtonText}
                  </Button>
                }
              </FormGroup>
            </Form>
          </div>
        </Grid>
      </main>
    );
  }
}
