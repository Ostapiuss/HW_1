import React from "react";

import PropTypes from "prop-types";

import './style.css';

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    <h2 className="title statistics__title">{ title ? title.toUpperCase() : 'NO TITLE' }</h2>

    <ul className="list statistics__list">
      {
        stats.map((item) => (
          <li className={`item ${item.label}`} key={item.id}>
            <span className="label">{ item.label }</span>
            <span className="percentage">{ item.percentage }%</span>
          </li>
        ))
      }
    </ul>
  </section>
)

Statistics.prototype = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  })).isRequired,
}

export default Statistics;
