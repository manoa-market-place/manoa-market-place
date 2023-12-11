import React from 'react';
import { Meteor } from 'meteor/meteor';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProductsInCart } from '../../api/product/ProductsInCart';

/** Renders a single row in the List good table. See pages/ListGoods.jsx. */
const Good = ({ good }) => {
  const addToCart = (productId) => {
    const checkedOutBy = Meteor.user().username;
    const checkedOutAt = new Date();
    // eslint-disable-next-line no-console
    console.log(`${checkedOutBy} added ${productId} to cart at ${checkedOutAt}`);
    ProductsInCart.collection.insert(
      { productId, checkedOutBy, checkedOutAt },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', `${good.name} added to your cart`, 'success');
        }
      },
    );
  };
  return (
    <Card border="success" className="h-100">
      <Card.Header>
        <Image fluid src={good.image} />
        <Card.Title className="text-center pt-3">
          <Link to={`/goods/${good._id}`}>{good.name}</Link>
        </Card.Title>
        <Card.Subtitle>${good.price}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>Condition: {good.condition}</Card.Text>
        <Card.Text>Quantity: {good.quantity}</Card.Text>
        <Button variant="primary" onClick={() => addToCart(good._id)}>Add to Cart</Button>
        <Card.Text className="float-end">Status: {good.status}</Card.Text>
      </Card.Body>
      <footer className="blockquote-footer pt-4">{good.owner}</footer>
    </Card>
  );
};

// Require a document to be passed to this component.
Good.propTypes = {
  good: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    condition: PropTypes.string,
    quantity: PropTypes.number,
    status: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Good;
