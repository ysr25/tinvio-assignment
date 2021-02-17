import React from 'react';
import axios from 'axios';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const posts = this.props.posts;
    const name = this.props.name;

    return (
      <div className="Container">
        <h1>{name}'s Posts</h1>
        <div className="PostCount grey">{posts.length} POSTS</div>
        <div className="Posts">
          {posts.map(post => <Post post={post} key={post.id} />)}
        </div>
      </div>
    );
  }
}

export default Posts;
