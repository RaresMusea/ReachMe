import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import profilePicture from '../../../images/pp1.png';
import './Stories.css';
import addToStory from '../..//../images/create.svg'

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storiesArray: [],
    };
  }

  componentDidMount() {
    this.fetchStories();
  }

  fetchStories = () => {
    const data = [
      {
        'user': '_raresmusea_2001_',
        'profilePic': '../../../images/pp1.png'
      },
      {
        'user': 'elon.musk',
        'profilePic': '../../../images/pp1.png'
      },
      {
        'user': '@billgates',
        'profilePic': '../../../images/pp1.png'
      },
      {
        'user': 'lana_del_rey',
        'profilePic': '../../../images/pp1.png'
      },
      {
        'user': 'its@leo_di_caprio',
        'profilePic': '../../../images/pp1.png'
      },
      {
        'user': 'john_legend',
        'profilePic': '../../../images/pp1.png'
      },
      {
        'user': 'mary_jane',
        'profilePic': '../../../images/pp1.png'
      },
      {
        'user': 'web_dev_masters',
        'profilePic': '../../../images/pp1.png'
      }
    ]

    this.setState({ storiesArray: data });
  }

  render() {
    return (
      <div>
        <div className='StoriesContainer'>
          <div className='StoryElement'>
            <img src={addToStory} title="Create new story" alt="Story creator" className='CreateStoryButton' />
          </div>
          {
            this.state.storiesArray.map((profile, idx) => (
              <div className="StoryElement" >
                <Avatar src={profilePicture} className='StoryProfilePicture' />
                <p class="StoryUsername">{profile.user}</p>
              </div>
            ))
          }
        </div>
      </div >
    );
  }
}
export default Stories;