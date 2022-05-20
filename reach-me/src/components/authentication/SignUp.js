import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <input type="text" className='SignInInput' placeholder="Mobile Number or Email address" />
        <input type="text" className='SignInInput' placeholder="First name & Last name" />
        <input type="text" className='SignInInput' placeholder="ReachMe Username" />
        <input type="password" className='SignInInput' placeholder='Password' />
        <button className='SignInButton'>Sign Up!</button>
      </div>
    );
  }
}

export default SignUp;