import React from "react";

import { Link } from 'react-router-dom'

import './style.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__items">
        <li className="navigation__item">
          <Link to="/" className="navigation__link">Profile</Link>
        </li>
        <li className="navigation__item">
          <Link to="/statistic" className="navigation__link">Statistic</Link>
        </li>
        <li className="navigation__item">
          <Link to="/friends" className="navigation__link">Friends</Link>
        </li>
        <li className="navigation__item">
          <Link to="/transition" className="navigation__link">Transitions History</Link>
        </li>
      </div>
    </nav>
  )
}

export default Navigation;
