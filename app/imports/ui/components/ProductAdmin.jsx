import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
/** Renders a single row in the List product (Admin) table. See pages/ListProductAdmin.jsx. */
const ProductAdmin = ({ product, collection }) => {
  const removeItem = (docID) => {
    // eslint-disable-next-line no-console
    console.log(`The item to remove is ${docID}`);
    collection.remove(docID);
  };
  return (
    <Card border="warning" className="h-100">
      <Card.Header>
        <Image fluid thumbnail src={product.image} />
        <Card.Title>Name: {product.name}</Card.Title>
        <Card.Subtitle>${product.price}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>Condition: {product.condition}</Card.Text>
        <Card.Text>Quantity: {product.quantity}</Card.Text>
        <Card.Text>
          <Link to={`/edit/${product._id}`}>Edit</Link>
        </Card.Text>
        <Button variant="danger" className="float-start" onClick={() => removeItem(product._id)}><Trash /></Button>
        <Card.Text className="float-end">Status: {product.status}</Card.Text>
      </Card.Body>
      <footer className="blockquote-footer px-3 pt-4">{product.owner}</footer>
    </Card>
  );
};

// Require a document to be passed to this component.
ProductAdmin.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    condition: PropTypes.string,
    quantity: PropTypes.number,
    owner: PropTypes.string,
    status: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  collection: PropTypes.object.isRequired,
};

export default ProductAdmin;
