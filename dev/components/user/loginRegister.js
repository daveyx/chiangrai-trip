import React, { Component } from 'react';
import { Grid, Tabs, Tab} from 'react-bootstrap';
import Cookies from 'universal-cookie';
import axios from 'axios';
import FBLogin from './fbLogin';
import LoginForm from './loginForm';
import RegistrationForm from './registrationForm';
import '../../css/loginregister.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    if (props.loginInfo.loggedIn === true) {
      this.getSecuredData();
    } else {
      console.log('props.loginInfo.loggedIn === false');
    }
  }

  getSecuredData() {
    const cookies = new Cookies();
    const authHeader = 'Bearer '.concat(cookies.get('access_token'));
    axios.get('http://localhost:6060/api/greetings', { headers: { Authorization: authHeader } })
      .then(response => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log('error getSecuredData() ' + error);
      });
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

    const registrationTab = this.props.loginInfo.loggedIn === true ? null :
      <Tab eventKey={2} title="Registration">
        <RegistrationForm />
      </Tab>;

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
              {this.props.loginInfo.loggedIn === true ?
                <div>
                  <p>{this.props.loginInfo.msg}</p>
                  <p>
                    a secured response:<br />
                    asdf
                  </p>
                </div>
                :
                login}
            </Tab>
            {registrationTab}
          </Tabs>
        </Grid>
      </main>
    );
  }
}
