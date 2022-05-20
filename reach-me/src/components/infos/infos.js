import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import profilePicture from '../../images/pp1.png';
import './infos.css';

class Infos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='Info'>
        <Avatar className="CurrentProfile" src={profilePicture} />
        <div className='InfoContents'>
          <p className="CurrentUser">CurrentUser</p>
          <p className='Description'>Description</p>

        </div>
      </div>
    );
  }
}

export default Infos;