import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Row } from 'react-bootstrap';
import { Products } from '../../api/product/Products';
import LoadingSpinner from '../components/LoadingSpinner';
import ProductItemAdmin from '../components/ProductItemAdmin';

/* Renders a table containing all of the product documents. Use <productItemAdmin> to render each row. */
const ListProductAdmin = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { products, ready } = useTracker(() => {
    // Get access to product documents.
    const subscription = Meteor.subscribe(Products.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the product documents
    const productItems = Products.collection.find({}).fetch();
    return {
      products: productItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>List Product (Admin)</h2>
          </Col>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3}>
        {products.map((product) => (<Col key={product._id} className="gy-4"><ProductItemAdmin product={product} collection={Products.collection} /></Col>))}
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListProductAdmin;
