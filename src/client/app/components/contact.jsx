'use strict';

import React from 'react';
import BasePage from './basePage.jsx';
import '../../css/contact.css';
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

const bgImage = {
  imgName: BASENAME + "img/contact.jpg"
};

const childStates = {
  h1Style: {
    fontSize: '12px',
    marginTop: '20px'
  },
  emailValue: '',
  subjectValue: '',
  messageValue: '',
  sendButtonText: 'Send'
};

export default class Home extends BasePage {
  constructor(props) {
    super(bgImage, childStates);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeSubject = this.handleChangeSubject.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      sendButtonText: "sending..."
    });

    if (this.isEmail(this.state.emailValue) === false) {
      alert("please provide a valid E-Mail address");
      return null;
    }
    emailjs.init("user_cHwOetRKbvaczpM99yjXl");

    let service_id = "daveyxga_gmail_com";
    let template_id = "daveyx_ga_email_template";
    let params = {
      email: this.state.emailValue,
      subject: this.state.subjectValue,
      messagel: this.state.messageValue
    };
    emailjs.send(service_id,template_id,params)
      .then(() => {
         alert("Sent!");
         this.setState({
           sendButtonText: "Send"
         });
       }, (err) => {
         alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
         this.setState({
           sendButtonText: "Send"
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
                <Form horizontal id="contact-form" onSubmit={(e) => this.handleSubmit(e)}>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2} smOffset={1}>
                      E-Mail*:
                    </Col>
                    <Col sm={6}>
                      <FormControl type="email" placeholder="Email" onChange={(e) => this.handleChangeEmail(e)} />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalSubject">
                    <Col componentClass={ControlLabel} sm={2} smOffset={1}>
                      Subject:
                    </Col>
                    <Col sm={6}>
                      <FormControl type="text" placeholder="Subject" onChange={(e) => this.handleChangeSubject(e)} />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formControlsTextarea">
                    <Col componentClass={ControlLabel} sm={2} smOffset={1}>
                      Message:
                    </Col>
                    <Col sm={6}>
                      <FormControl componentClass="textarea" placeholder="Message" onChange={(e) => this.handleChangeMessage(e)} />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col smOffset={3} sm={8}>
                      <Button ref="sendButton" type="submit" style={{'float': 'left'}}>
                        {this.state.sendButtonText}
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </Grid>
        </main>
      );
  }
}
