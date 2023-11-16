import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Product table. See pages/ListProduct.jsx. */
const ProductAdmin = ({ product }) => (
  <Card className="h-100">
    <Card.Header>
      <Image fluid src={product.image} />
      <Card.Title>Name: {product.name}</Card.Title>
      <Card.Subtitle>${product.price}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>Condition: {product.condition}</Card.Text>
      <Card.Text>Color: {product.color}</Card.Text>
      <Card.Text>Quantity: {product.quantity}</Card.Text>
      <footer className="blockquote-footer pt-4">{product.owner}</footer>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
ProductAdmin.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    condition: PropTypes.string,
    color: PropTypes.string,
    quantity: PropTypes.number,
    owner: PropTypes.string,
    // _id: PropTypes.string,
  }).isRequired,
};

export default ProductAdmin;
