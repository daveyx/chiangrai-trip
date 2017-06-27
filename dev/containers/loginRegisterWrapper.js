import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Cookies from 'universal-cookie';
import {loginOAuth} from '../actions/index';
import LoginRegister from '../components/user/loginRegister.js';
import {oAuthConfig} from '../config';
import Querystring from 'query-string';
import axios from 'axios';

class LoginRegisterWrapper extends React.Component {
  constructor(props) {
    super(props);
    const loginInfo = this.props.authState ?
      {
         loggedIn: true,
         msg: 'Sucessfully logged in'
       } :
       {
        loggedIn: false
      };
    this.state = {
      loginInfo: loginInfo
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
         this.props.loginOAuth(response.data);
         this.setState({
           loginInfo: {
             loggedIn: true,
             msg: 'Sucessfully logged in'
           }
         });
        //  console.log('response.data.access_token', response.data.access_token)
        //  console.log('response.data.refresh_token', response.data.refresh_token)
         const expireDateAccess = new Date (new Date().getTime() + (1000 * response.data.expires_in));
         const cookies = new Cookies();
         cookies.set('access_token', response.data.access_token, {path: '/', expires: expireDateAccess});
         const expireDateRefresh = new Date (new Date().getTime() + (1000 * response.data.expires_in));
         cookies.set('refresh_token', response.data.refresh_token, {path: '/', expires: expireDateRefresh});
        //  console.log('cookies.get()', cookies.get('access_token'));
       })
       .catch((error) => {
         console.log('error loginOAuth()' + error);
       });
  }

  render() {
    return(
      <LoginRegister
        loginOAuth={this.loginOAuth}
        loginInfo={this.state.loginInfo}
      />
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
