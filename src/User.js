import React from 'react';
import axios from 'axios';

import image from './images/image-cropped.jpg';
import shop from './images/icon-24-shop.svg';
import phone from './images/phone.svg';
import category from './images/category.png';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  getPhone = (phone) => {
    return phone.split(" ")[0];
  }

  getAddress = (address) => {
    return `${address.street}, ${address.suite}, ${address.city} ${address.zipcode}`;
  }

  getCategories = (categories) => {
    return categories.split(" ").reduce((acc, category) => acc + " • " + category);
  }

  render() {
    const user = this.props.user;
    const address = user.address;

    return (
      <div className="Container">
        <img src={image} />
        <h1>{user.name}</h1>
        <div className="Field"><img src={phone} alt="Phone"/> {this.getPhone(user.phone)}</div>
        <div className="Field" style={{textTransform: "capitalize"}}><img src={category} alt="Category"/>{this.getCategories(user.company.bs)}</div>
        <div className="Field"><img src={shop} alt="Address"/>{this.getAddress(user.address)}</div>
      </div>
    );
  }
}

export default User;
