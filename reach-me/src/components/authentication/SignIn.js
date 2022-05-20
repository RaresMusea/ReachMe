import React, { Component } from 'react';
import './Login.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <input type="text" className='SignInInput' placeholder="Username or Email" />
        <input type="password" className='SignInInput' placeholder='Password' />
        <button className='SignInButton'>Log In</button>
      </div>
    );
  }
}

export default SignIn;
