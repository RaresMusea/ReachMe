import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import './suggestions.css';
import profile1 from '../../images/pp2.png';

class Suggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='Suggestions'>
        <div className='SuggestionsHeader'>
          <div>

          </div>
          <div className='controller'>
            <div className='Text'>Reach people you may know</div>
            <div className='Button'>Reach all</div>
          </div>
          <div className='SuggestionsContents'>
            <Avatar className="SelectedSuggestionProfilePic" src={profile1} />
            <span class="FlexContainer">
              <div className='SuggestionUsername'>george.michael</div>
              <div className='ReachButton'>Reach!</div>
            </span>
          </div>

          <div className='SuggestionsContents'>
            <Avatar className="SelectedSuggestionProfilePic" src="image.png" />
            <span class='FlexContainer'>
              <div className='SuggestionUsername'>molly_brown_1981</div>
              <div className='ReachButton'>Reach!</div>
            </span>
          </div>

          <div className='SuggestionsContents'>
            <Avatar className="SelectedSuggestionProfilePic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0-8CYleGWDG2Vt9fKFSCnK7LPbp77RbUldw&usqp=CAU" />
            <span class='FlexContainer'>
              <div className='SuggestionUsername'>its.hannah_stone004</div>
              <div className='ReachButton'>Reach!</div>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Suggestions;