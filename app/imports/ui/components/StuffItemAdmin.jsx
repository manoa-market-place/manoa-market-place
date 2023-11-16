import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
const StuffItemAdmin = ({ stuff, collection }) => {
  const removeItem = (docID) => {
    console.log(`The item to remove is ${docID}`);
    collection.remove(docID);
  };

  return (
    <tr>
      <td>{stuff.name}</td>
      <td>{stuff.quantity}</td>
      <td>{stuff.condition}</td>
      <td>{stuff.owner}</td>
      <td>
        <Link to={`/edit/${stuff._id}`}>Edit</Link>
      </td>
      <td><Button variant="danger" onClick={() => removeItem(stuff._id)}><Trash /></Button></td>
    </tr>
  );

};

// Require a document to be passed to this component.
StuffItemAdmin.propTypes = {
  stuff: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    condition: PropTypes.string,
    _id: PropTypes.string,
    owner: PropTypes.string,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  collection: PropTypes.object.isRequired,
};

export default StuffItemAdmin;
