import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { ProductsInCart } from '../../api/product/ProductsInCart';
import LoadingSpinner from '../components/LoadingSpinner';
import GoodItem from '../components/GoodItem';
import { Products } from '../../api/product/Products';

const ListCartGoods = () => {
  const { products, cart, ready } = useTracker(() => {
    const productsSubscription = Meteor.subscribe(Products.allPublicationName);
    const cartSubscription = Meteor.subscribe(ProductsInCart.userPublicationName);
    const rdy = productsSubscription.ready() && cartSubscription.ready();
    const productItems = Products.collection.find({}).fetch();
    const cartItems = ProductsInCart.collection.find({}).fetch();
    return {
      products: productItems,
      cart: cartItems,
      ready: rdy,
    };
  }, []);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (ready) {
      // Calculate total price when cart or products change
      const total = cart.reduce((acc, cartItem) => {
        const product = products.find((p) => cartItem.productId === p._id);
        return acc + (product ? product.price * cartItem.quantity : 0);
      }, 0);
      setTotalPrice(total);
    }
  }, [ready, products, cart]);

  const cartGoods = cart.map((cartItem) => products.find((product) => cartItem.productId === product._id));
  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>Your Cart</h2>
          </Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Owner</th>
                <th>Good</th>
              </tr>
            </thead>
            <tbody>
              {cartGoods.map((good) => (<GoodItem key={good._id} good={good} collection={Products.collection} />))}
            </tbody>
            <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : (
    <LoadingSpinner />
  );
};

export default ListCartGoods;
