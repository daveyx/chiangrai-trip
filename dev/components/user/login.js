import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import FBLogin from './fbLogin';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Grid fluid style={this.props.contentStyle}>
            <h1 className="text-center contact-h1">
              Login!
            </h1>
        </Grid>
        <Grid>
          <FBLogin />
        </Grid>
      </main>
    );
  }
}
