import React from "react";

import PropTypes from "prop-types";

import './style.css';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {
      friends.map((friend) => (
        <li className="friend-item" key={friend.id}>
          <div className={`status ${friend.isOnline ? 'online' : 'offline'}`}></div>
          <img src={friend.avatar} alt="friend-icon" className="avatar" width="80" />
          <p className="name">{ friend.name }</p>
        </li>
      ))
    }
  </ul>
);

FriendList.prototype = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  })).isRequired
}

export default FriendList;
