import React from "react";

import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <div className={`status ${isOnline ? 'online' : 'offline'}`}></div>
      <img src={avatar} alt="friend-icon" className="avatar" width="80" />
      <p className="name">{ name }</p>
    </>
  )
}

FriendListItem.porpTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;
