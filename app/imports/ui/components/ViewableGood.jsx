import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Image } from 'react-bootstrap';

/** Renders a single row in the List good table. See pages/ListViewableGoods.jsx. */
const ViewableGood = ({ good, cartCollection }) => {
  const addToCart = (productId) => {
    // eslint-disable-next-line no-console
    console.log(`Add to cart: ${productId}`);
    cartCollection.insert();
  };

  return (
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
        <Button variant="primary" onClick={() => addToCart(good._id)}>Add to Cart</Button>
        <footer className="blockquote-footer pt-4">{good.owner}</footer>
      </Card.Body>
    </Card>
  );
};

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
  cartCollection: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.string,
    productId: PropTypes.string,
    checkedOut: PropTypes.instanceOf(Date),
  })).isRequired,
};

export default ViewableGood;
