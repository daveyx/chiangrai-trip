import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginOAuth} from '../actions/index';
import LoginRegister from '../components/user/loginRegister.js';
import {config} from '../config';
import Querystring from 'query-string';
import axios from 'axios';

class LoginRegisterWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.loginOAuth = this.loginOAuth.bind(this);
  }

  loginOAuth(email, password) {
    const data = {
      grant_type: 'password',
      Authorization: 'Basic ZGF2ZXl4OnNlY3JldA==',
      username: email,
      password: password
    };

    axios.post('http://localhost:6060/oauth/token', Querystring.stringify(data),
      { headers: { Authorization: 'Basic ZGF2ZXl4OnNlY3JldA==' } })
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
    return(
      <LoginRegister loginOAuth={this.loginOAuth} />
    );
  }
}

function mapStatesToProps(state) {
  return {
    authState: state.authState
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    loginOAuth: loginOAuth
  }, dispatch);
}

export default connect(mapStatesToProps, matchDispatchToProps)(LoginRegisterWrapper);
