import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Image } from 'react-bootstrap';

/** Renders a single row in the List good table. See pages/ListViewableGoods.jsx. */
const ViewableGood = ({ good }) => (
  <Card border="success" className="h-100">
    <Card.Header>
      <Image fluid src={good.image} />
      <Card.Title>Name: {good.name}</Card.Title>
      <Card.Subtitle>${good.price}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>Condition: {good.condition}</Card.Text>
      <Card.Text>Color: {good.color}</Card.Text>
      <Card.Text>Quantity: {good.quantity}</Card.Text>
      <Button variant="primary">Add to Cart</Button>
      <footer className="blockquote-footer pt-4">{good.owner}</footer>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
ViewableGood.propTypes = {
  good: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    condition: PropTypes.string,
    color: PropTypes.string,
    quantity: PropTypes.number,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default ViewableGood;
