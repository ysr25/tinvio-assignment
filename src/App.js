import React from 'react';
import './App.css';
import User from './User';
import Posts from './Posts';
import axios from 'axios';

import loading from './images/loading.gif';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      user: {},
      posts: {},
      isLoading: true
    }
  }

  fetchUser = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.id}`);
  }

  fetchPosts = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.state.id}`)
  }

  componentDidMount() {
    Promise.all([this.fetchUser(), this.fetchPosts()])
      .then(res => this.setState({ user: res[0].data, posts: res[1].data, isLoading: false }));
  }

  getFirstName = (name) => {
    return name.split(' ')[0];
  }

  render() {
    let content = <img style={{marginTop: 30}} src={loading} alt="Loading..." />

    if (!this.state.isLoading) {
      content = <>
        <User user={this.state.user} /> 
        <Posts name={this.getFirstName(this.state.user.name)} posts={this.state.posts} />
      </>
    }

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default App;
