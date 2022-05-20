import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import like from '../../..//../images/heart.svg';
import unlike from '../../../../images/dislike.svg';
import share from '../../../../images/share.svg';
import comment from '../../../../images/comment.svg';

import './Post.css';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { commentsArr: [] };
  }

  componentDidMount = () => {
    this.fetchComments();
  }


  fetchComments = () => {
    const dummyComments = [
      {
        "user": "elon_musk",
        "ID": "1234",
        "dateAndTime": "23233232",
        "commentContent": "Amazing picture! 💙",
      },
      {
        "user": "helena_1234",
        "ID": "23323",
        "dateAndTime": "2323323232",
        "commentContent": "Outstanding! 😍",
      },
      {
        "user": "viktor_the_photographer",
        "ID": "32322123",
        "dateAndTime": "32324553",
        "commentContent": "Nice shot! 📷",
      }
    ]
    this.setState({ commentsArr: dummyComments });
  }


  render() {
    return (
      <div className="PostContainer">

        {/* Header */}
        <div className='PostHeader'>
          <Avatar src={this.state.profileImage} className="PostOwnerProfilePic" />
          <div className='AditionalText'>
            <h3 className='PostOwner'>{this.props.user}</h3>
            <p className='Location'>{this.props.location}</p>
          </div>
        </div >

        {/* Image-Post */}
        <div className='ImagePost'>
          <img src={this.props.imagePost} alt="Post" className='Image' />
        </div>

        {/* Buttons */}
        <div>
          <div className="ButtonsContainer">
            <img className='PostOption' src={like} alt="LikeButton" title=" Appreciate" />
            <img className='PostOption' src={unlike} alt="DislikeButton" title="Dislike" />
            <img className='PostOption' src={share} alt="Share" title="Share" />
            <img className='PostOption' src={comment} alt="Comment" title="Comment" />
          </div>
          <p className='NumberOfLikes'>{this.props.likes}</p>
        </div>

        {/* Comment Section */}
        <div className='Comments'>
          {
            this.state.commentsArr.map((comment) => (
              <p className='CommentText'><span className="CommentUserName">{comment.user}: </span>{comment.commentContent}</p>
            ))
          }
          <input type="text" className='AddComment' placeholder='Add a public comment'></input>
        </div>
      </div>
    );
  }
}

export default Post;