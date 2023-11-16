import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
/** Renders a single row in the List product (Admin) table. See pages/ListProductAdmin.jsx. */
const ProductItemAdmin = ({ product, collection }) => {
  const removeItem = (docID) => {
    console.log(`The item to remove is ${docID}`);
    collection.remove(docID);
  };

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>{product.condition}</td>
      <td>{product.owner}</td>
      <td>
        <Link to={`/edit/${product._id}`}>Edit</Link>
      </td>
      <td><Button variant="danger" onClick={() => removeItem(product._id)}><Trash /></Button></td>
    </tr>
  );

};

// Require a document to be passed to this component.
ProductItemAdmin.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    condition: PropTypes.string,
    _id: PropTypes.string,
    owner: PropTypes.string,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  collection: PropTypes.object.isRequired,
};

export default ProductItemAdmin;
