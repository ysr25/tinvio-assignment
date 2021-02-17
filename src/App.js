import React from 'react';
import axios from 'axios';
import './App.css';
import User from './User';
import Posts from './Posts';
import SwitchUser from './SwitchUser';

import loadingImg from './images/loading.gif';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      users: {},
      posts: {},
      isLoading: true
    }
  }

  fetchUsers = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/`);
  }

  fetchPosts = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  }

  componentDidMount() {
    Promise.all([this.fetchUsers(), this.fetchPosts(this.state.id)])
      .then(res => this.setState({ users: res[0].data, posts: res[1].data, isLoading: false }));
  }

  selectUser = (e) => {
    this.setState({ id: e.target.value, isLoading: true });

    Promise.all([this.fetchPosts(e.target.value)])
      .then(res => this.setState({ posts: res[0].data, isLoading: false }));
  }

  render() {
    let content = <div className="center">
        <img style={{marginTop: 30}} src={loadingImg} alt="Loading..." />
      </div>

    if (!this.state.isLoading) {
      const user = this.state.users[this.state.id - 1];

      content = <><div className="SwitchUser center">
          <SwitchUser id={this.state.id} users={this.state.users} onClick={this.selectUser} />
        </div>
        <div className="Main">
          <User user={user} />
          <Posts name={user.name} posts={this.state.posts} />
        </div>
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
