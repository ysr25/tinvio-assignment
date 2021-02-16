import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const post = this.props.post;

    return (
      <div className="Post">
        <b>{post.title}</b>
        <p className="grey">{post.body}</p>
      </div>
    );
  }
}

export default User;
