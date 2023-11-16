import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CartFill, HouseAddFill, PeopleFill } from 'react-bootstrap-icons';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-2">
    <Row className="align-middle text-center py-5">
      <Col>
        <h1>Manoa Marketplace</h1>
        <p>Your online store for UHM student-related goods and services</p>
      </Col>
    </Row>
    <Row className="text-center py-2">
      <Col xs={4}>
        <CartFill size={50} />
      </Col>
      <Col xs={4}>
        <PeopleFill size={50} />
      </Col>
      <Col xs={4}>
        <HouseAddFill size={50} />
      </Col>
    </Row>
    <Row className="text-center">
      <Col xs={4}>
        <h3 className="pt-5">Goods</h3>
        <p>Look for something to buy/sell.</p>
      </Col>
      <Col xs={4}>
        <h3 className="pt-5">Services</h3>
        <p>Advertise a skill for commission.</p>
      </Col>
      <Col xs={4}>
        <h3 className="pt-5">Accommodations</h3>
        <p>Look for a housing accommodation.</p>
      </Col>
    </Row>
  </Container>
);

export default Landing;
