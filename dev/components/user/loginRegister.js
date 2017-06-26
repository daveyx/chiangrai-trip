import React, { Component } from 'react';
import { Grid, Tabs, Tab} from 'react-bootstrap';
import FBLogin from './fbLogin';
import LoginForm from './loginForm';
import RegistrationForm from './registrationForm';
import '../../css/loginregister.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const login =
      <div>
        <LoginForm
          loginOAuth={this.props.loginOAuth}
        />
        <hr />
        <p>Or</p>
        <FBLogin />
      </div>;
    return (
      <main>
        <Grid fluid style={this.props.contentStyle}>
            <h1 className="text-center contact-h1">
              Login / Registration
            </h1>
        </Grid>
        <Grid>
          <Tabs defaultActiveKey={1} id="loginregister-tabs">
            <Tab eventKey={1} title="Login">
              {this.props.loginInfo.loggedIn === true ? <p>{this.props.loginInfo.msg}</p> :
              login}
            </Tab>
            <Tab eventKey={2} title="Registration">
              <RegistrationForm />
            </Tab>
          </Tabs>
        </Grid>
      </main>
    );
  }
}
