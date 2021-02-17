import React from 'react';

class SwitchUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <select defaultValue={this.props.id}>
        {this.props.users.map(user => 
          <option value={user.id} key={user.id} onClick={this.props.onClick}>{user.name}</option>
        )}
      </select>
    );
  }
}

export default SwitchUser;
