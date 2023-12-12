import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Products } from '../../api/product/Products';
import LoadingSpinner from '../components/LoadingSpinner';
import Product from '../components/Product';

/* Renders a table containing all of the Product documents. Use <Product> to render each row. */
const ListProduct = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, products } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Product documents.
    const subscription = Meteor.subscribe(Products.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Product documents
    const productItems = Products.collection.find({}).fetch();
    return {
      products: productItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container id="list-product-page" className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center text-white">
            <h2>My Product</h2>
          </Col>
          <Row xs={1} md={2} lg={3} className="g-4">
            {products.map((product) => (<Col key={product._id}><Product product={product} collection={Products.collection} /></Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListProduct;
