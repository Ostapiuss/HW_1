import React from "react";

import PropTypes from "prop-types";

import './style.css';
import FriendListItem from "../FriendListItem";

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {
      friends.map((friend) => (
        <li className="friend-item" key={friend.id}>
          <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
        </li>
      ))
    }
  </ul>
);

FriendList.prototype = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired
}

export default FriendList;
