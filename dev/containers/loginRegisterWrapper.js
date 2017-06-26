import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginOAuth} from '../actions/index';
import LoginRegister from '../components/user/loginRegister.js';
import {oAuthConfig} from '../config';
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
      grant_type: oAuthConfig.GRANT_TYPE,
      username: email,
      password: password
    };
    axios.post(oAuthConfig.TOKEN_URL, Querystring.stringify(data),
      { headers: { Authorization: oAuthConfig.HTTP_AUTH } })
      .then(response => {
         console.log(response);
         const token = response.data.access_token;
         console.log('userresponse ', response.data, token);
         this.props.loginOAuth(response.data);
       })
       .catch((error) => {
         console.log('error loginOAuth()' + error);
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
