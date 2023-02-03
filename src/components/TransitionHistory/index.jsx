import React from 'react';

import PropTypes from "prop-types";

import './style.css';

const TransitionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
      <tr>
        <th rowspan="2">TYPE</th>
        <th>AMOUNT</th>
        <th>CURRENCY</th>
      </tr>
      </thead>

      <tbody>
      {
        items.map((item) => (
          <tr>
            <td className="type">
              <div>{ item.type }</div>
            </td>
            <td>{ item.amount }</td>
            <td>{ item.currency }</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  )
};

TransitionHistory.prototype = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })).isRequired,
}

export default TransitionHistory;
