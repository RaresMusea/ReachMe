import React, { Component } from 'react';
import Post from './Post/Post';
import './Posts.css';
import uploadImage from '../../../images/create-new.svg';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount = () => {
    this.fetchPosts();
  }


  fetchPosts = () => {
    const dummyPosts = [
      {
        "id": "3232",
        "Owner": "elon_musk",
        "PostedImageLink": "https://picsum.photos/800/600",
        "PostDate": "1223234",
        "Location": "Florida, USA",
        "Likes": "1212",
      },
      {
        "id": "3132",
        "Owner": "camil_petrescue",
        "PostedImageLink": "https://picsum.photos/300/400",
        "PostDate": "1223234",
        "Location": "London, UK",
        "Likes": "121",
      },
      {
        "id": "3242",
        "Owner": "michael_1234",
        "PostedImageLink": "https://picsum.photos/900/600",
        "PostDate": "122323234",
        "Location": "Sibiu, Romania",
        "Likes": "12",
      }
    ]
    this.setState({ posts: dummyPosts });
  }


  render() {
    return (
      <div>
        <div className='UploadButton'>
          <img src={uploadImage} className='uploadImage' title="Upload content on ReachMe" />
        </div>

        {
          this.state.posts.map((post) => (
            <Post id={post.id} user={post.Owner} imagePost={post.PostedImageLink} location={post.Location} likes={post.Likes + " Likes"} />
          ))
        }
      </div>
    );
  }
}

export default Posts;