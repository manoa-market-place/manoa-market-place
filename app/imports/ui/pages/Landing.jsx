import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HouseAddFill } from 'react-bootstrap-icons';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row className="align-middle text-center">
      <Col>
        <h1>Manoa Marketplace</h1>
        <p>Your online store for UHM student-related goods and services</p>
      </Col>
    </Row>
    <Row className="align-middle text-center">
      <Col xs={4}>
        Some Good Icon
        <h3>Goods</h3>
        <p>Look for something to buy/sell.</p>
      </Col>
      <Col xs={4}>
        Some Service Icon
        <h3>Services</h3>
        <p>Advertise a skill for commission.</p>
      </Col>
      <Col xs={4}>
        <HouseAddFill size={50} />
        <h3>Accommodations</h3>
        <p>Look for a housing accommodation.</p>
      </Col>
    </Row>
  </Container>
);

export default Landing;
