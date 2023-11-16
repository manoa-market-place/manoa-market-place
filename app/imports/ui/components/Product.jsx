import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Product = ({ product }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={product.image} />
      <Card.Title>Name: {product.name}</Card.Title>
      <Card.Subtitle>${product.price}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>Condition: {product.condition}</Card.Text>
      <Card.Text>Color: {product.color}</Card.Text>
      <Card.Text>Quantity: {product.quantity}</Card.Text>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    condition: PropTypes.string,
    color: PropTypes.string,
    quantity: PropTypes.number,
    // _id: PropTypes.string,
  }).isRequired,
};

export default Product;