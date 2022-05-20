import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import backToHome from '../../images/backhome.svg';
import messages from '../../images/messages.svg';
import discovery from '../../images/discovery.svg';
import feed from '../../images/feed.svg';
import { Avatar } from '@mui/material';
import profilePic from '../../images/pp1.png'

import './HeaderNavigation.css';
class HeaderNavigation extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
        <div className="NavigationController">
          <Grid container>
            <Grid xs={1}>
            </Grid>
            <Grid xs={2}>
              <div className='FirstGrid'>
                <div id="logoAnimation" style={{ "width": "40px", "height": "40px", "marginRight": "5px" }}></div>
                <h1 className='ReachMeLogo'>ReachMe</h1>
              </div>
            </Grid>
            <Grid xs={5} className="SearchArea">
              <input type="text" className="SearchBar" placeholder="Who do you wanna reach?"></input>
            </Grid>
            <Grid xs={4} className="IconsDrawer">
              <img src={backToHome} alt="Home" title="Home" className="Icon" />
              <img src={messages} alt="Messages" title="Messages" className="Icon" />
              <img src={discovery} alt="Discover" title="Discover" className="Icon" />
              <img src={feed} alt="Feed" title="Feed" className="Icon" />
              <Avatar src={profilePic} className="ProfilePic" />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default HeaderNavigation;