import React from 'react';

import PropTypes from 'prop-types';

import './style.css';

const getProfileCount = (quantity) => {
  if (typeof quantity === 'number') {
    return quantity.toLocaleString("en-US");
  }

  return quantity;
}

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className="profile">
    <div className="description profile__description">
      <img
        src={ avatar }
        alt="User avatar"
        className="avatar"
      />
      <p className="name">{ username }</p>
      <p className="tag">@{ tag }</p>
      <p className="location">{ location }</p>
    </div>

    <ul className="stats profile__stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{ getProfileCount(stats.followers) }</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{ getProfileCount(stats.views) }</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{ getProfileCount(stats.likes) }</span>
      </li>
    </ul>
  </div>
)

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}

export default Profile;
