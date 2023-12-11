import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Image } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';

/** Renders a single row in the List Product table. See pages/ListProduct.jsx. */
const Product = ({ product, collection }) => {
  const removeItem = (docID) => {
    // eslint-disable-next-line no-console
    console.log(`The item to remove is ${docID}`);
    collection.remove(docID);
  };
  return (
    <Card border="dark" className="h-100">
      <Card.Header>
        <Image fluid thumbnail src={product.image} />
        <Card.Title className="text-center pt-3">{product.name}</Card.Title>
        <Card.Subtitle>${product.price}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>Condition: {product.condition}</Card.Text>
        <Card.Text>Color: {product.color}</Card.Text>
        <Card.Text>Quantity: {product.quantity}</Card.Text>
        <Button variant="danger" className="float-start" onClick={() => removeItem(product._id)}><Trash /></Button>
        <Card.Text className="float-end">Status: {product.status}</Card.Text>
      </Card.Body>
    </Card>
  );
};

// Require a document to be passed to this component.
Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    condition: PropTypes.string,
    color: PropTypes.string,
    quantity: PropTypes.number,
    owner: PropTypes.string,
    status: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  collection: PropTypes.object.isRequired,
};

export default Product;
