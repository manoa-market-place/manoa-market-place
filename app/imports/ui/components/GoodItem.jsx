import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GoodItem = ({ good }) => (
  <tr>
    <td>{good.name}</td>
    <td>{good.price}</td>
    <td>{good.quantity}</td>
    <td>{good.status}</td>
    <td>{good.owner}</td>
    <td>
      <Link to={`/goods/${good._id}`}>View</Link>
    </td>
  </tr>
);

GoodItem.propTypes = {
  good: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    status: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default GoodItem;
