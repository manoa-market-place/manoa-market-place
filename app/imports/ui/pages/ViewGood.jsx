import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import LoadingSpinner from '../components/LoadingSpinner';
import { Products } from '../../api/product/Products';
import SingleGood from '../components/SingleGood';

const ViewGood = () => {
  const { _id } = useParams();
  const { products, ready } = useTracker(() => {
    const productsSubscription = Meteor.subscribe(Products.allPublicationName);
    const rdy = productsSubscription.ready();
    const productItems = Products.collection.find().fetch();
    return {
      products: productItems,
      ready: rdy,
    };
  }, [_id]);

  const good = products.find((product) => product._id === _id);

  return ready ? (
    <Container>
      <Row>
        <Col>
          <SingleGood good={good} />
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default ViewGood;
