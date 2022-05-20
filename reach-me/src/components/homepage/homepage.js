import React, { Component } from 'react';
import Feed from './Feed';
import HeaderNavigation from './HeaderNavigation';
import './homepage.css';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <HeaderNavigation />
        <Feed></Feed>
      </div>
    );
  }
}

export default Homepage;