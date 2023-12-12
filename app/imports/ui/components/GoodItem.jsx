import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
// import good from './Good';

const GoodItem = ({ good, collection }) => {
  const removeItem = (docID) => {
    // eslint-disable-next-line no-console
    console.log(`The item to remove is ${docID}`);
    // eslint-disable-next-line react/prop-types
    collection.remove(docID);
  };
  return (
    <tr>
      <td>{good.name}</td>
      <td>{good.price}</td>
      <td>{good.quantity}</td>
      <td>{good.status}</td>
      <td>{good.owner}</td>
      <td>
        <Link to={`/goods/${good._id}`} id="view-good">View</Link>
      </td>
      <td><Button variant="danger" onClick={() => removeItem(good._id)}><Trash /></Button></td>
    </tr>
  );
};

GoodItem.propTypes = {
  good: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    status: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  collection: PropTypes.object.isRequired,
};

export default GoodItem;
