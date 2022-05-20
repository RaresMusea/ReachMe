import React, { Component } from 'react';
import { Grid } from '@mui/material';
import './Feed.css';
import Stories from './Stories/Stories';
import Posts from './Posts/Posts';
import Infos from '../infos/infos';
import Suggestions from '../suggestions/suggestions';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Grid container>
          <Grid xs={2}></Grid>
          <Grid xs={6}>
            <div>
              <Stories />
              <Posts />
            </div>
          </Grid>
          <Grid xs={2}>
            <Infos />
            <Suggestions />
          </Grid>
          <Grid xs={2}></Grid>
        </Grid>
      </div >
    );
  }
}

export default Feed;