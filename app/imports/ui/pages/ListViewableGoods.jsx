import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Row } from 'react-bootstrap';
import { Products } from '../../api/product/Products';
import LoadingSpinner from '../components/LoadingSpinner';
import ViewableGood from '../components/ViewableGood';

/* Renders a table containing all of the product documents. Use <productItemAdmin> to render each row. */
const ListViewableGoods = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { products, ready } = useTracker(() => {
    // Get access to product documents.
    const subscription = Meteor.subscribe(Products.allPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the product documents
    const productItems = Products.collection.find({}).fetch();
    return {
      products: productItems,
      ready: rdy,
    };
  }, []);

  const goods = products.filter((product => (product.owner !== Meteor.user().username)));

  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>Goods for Sale</h2>
          </Col>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3}>
        {goods.map((product) => (<Col key={product._id} className="gy-4"><ViewableGood good={product} /></Col>))}
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListViewableGoods;
