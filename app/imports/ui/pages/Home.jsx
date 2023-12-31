import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { CartFill, PeopleFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

/* A simple static component to render some text for the landing page. */
const Home = () => (
  <Container id="home-page" fluid className="py-2">
    <Row className="text-center py-5 ">
      <Col className="text-white">
        <h1>Manoa Marketplace</h1>
        <p>Your online store for UHM student-related goods and services</p>
      </Col>
    </Row>
    <Card>
      <Row className="text-center py-2 background-color white">
        <Col xs={6}>
          <CartFill size={75} />
        </Col>
        <Col xs={6}>
          <PeopleFill size={75} />
        </Col>
      </Row>
      <Row className="text-center">
        <Col xs={6}>
          <h3 className="pt-5"><Link to="/goods">Goods</Link></h3>
          <p>Look for something to buy/sell.</p>
        </Col>
        <Col xs={6}>
          <h3 className="pt-5"><Link to="/services">Services</Link></h3>
          <p>Advertise a skill for commission.</p>
        </Col>
      </Row>
    </Card>
  </Container>
);

export default Home;
