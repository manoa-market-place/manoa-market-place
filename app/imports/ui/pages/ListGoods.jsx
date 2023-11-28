import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Row } from 'react-bootstrap';
import { Products } from '../../api/product/Products';
import LoadingSpinner from '../components/LoadingSpinner';
import ViewableGood from '../components/Good';
import { ProductsInCart } from '../../api/product/ProductsInCart';

/* Renders a table containing all of the product documents. Use <productItemAdmin> to render each row. */
const ListGoods = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const [conditionFilter, setConditionFilter] = useState('');
  const { products, cart, ready } = useTracker(() => {
    // Get access to product documents.
    const productsSubscription = Meteor.subscribe(Products.allPublicationName);
    const cartSubscription = Meteor.subscribe(ProductsInCart.userPublicationName);
    // Determine if the subscription is ready
    const rdy = productsSubscription.ready() && cartSubscription.ready();
    // Get the product documents
    const productItems = Products.collection.find({}).fetch();
    const cartItems = ProductsInCart.collection.find({}).fetch();
    return {
      products: productItems,
      cart: cartItems,
      ready: rdy,
    };
  }, []);

  const goods = products.filter((product) => product.owner !== Meteor.user().username);
  const filteredGoods = goods.filter((good) => !conditionFilter || good.condition === conditionFilter);
  const handleConditionFilterChange = (event) => {
    setConditionFilter(event.target.value);
  };

  const goods = products.filter((product) => (product.owner !== Meteor.user().username));

  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>Goods for Sale</h2>
          </Col>
          <Col className="text-center">
            <input
              type="text"
              placeholder="Filter by condition"
              value={conditionFilter}
              onChange={handleConditionFilterChange}
            />
          </Col>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3}>
        {filteredGoods.map((product) => (<Col key={product._id} className="gy-4"><ViewableGood good={product} cartCollection={cart} /></Col>))}
      <Row xs={1} md={2} lg={3} className="gy-4">
        {goods.map((product) => (<Col key={product._id} className="gy-4"><ViewableGood good={product} cartCollection={cart} /></Col>))}
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListGoods;
