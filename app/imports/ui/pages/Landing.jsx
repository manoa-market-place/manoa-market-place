import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CartFill, PeopleFill } from 'react-bootstrap-icons';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-2">
    <Row className="text-center py-5">
      <Col>
        <h1>Manoa Marketplace</h1>
        <p>Your online store for UHM student-related goods and services</p>
      </Col>
    </Row>
    <Row className="text-center py-2">
      <Col xs={6}>
        <CartFill size={75} />
      </Col>
      <Col xs={6}>
        <PeopleFill size={75} />
      </Col>
    </Row>
    <Row className="text-center">
      <Col xs={6}>
        <h3 className="pt-5">Goods</h3>
        <p>Look for something to buy/sell.</p>
      </Col>
      <Col xs={6}>
        <h3 className="pt-5">Services</h3>
        <p>Advertise a skill for commission.</p>
      </Col>
    </Row>
    <Row className="overview text-center">
      <h2>Overview</h2>
      <p>Idle goods trading platform, let you anytime, anywhere sell fast, buy well, reliable and easy to solve idle goods trouble!</p>
    </Row>
    <Row className="offer text-center">
      <h2>What We Offer</h2>
      <Row>
        <Col>
          <p>Transaction Assistance</p>
        </Col>
        <Col>
          <p>Account Management</p>
        </Col>
        <Col>
          <p>Technical Support</p>
        </Col>
        <Col>
          <p>Dispute Resolution</p>
        </Col>
        <Col>
          <p>Educational Resources</p>
        </Col>
      </Row>
    </Row>

    <Row className="intro text-center">
      <h2>Cash</h2>
      <p>take pictures and sell, idle items around you become valuable in 10 seconds</p>
      <h2>Save Money</h2>
      <p>new idle value second-hand waiting for you to search</p>
      <h2>Environmental protection</h2>
      <p>eliminate waste, idle can also glow new value</p>
    </Row>

    <Row className="vendor-information text-center">
      <h2>Become a Vendor</h2>
      <p>Interested in selling your goods? Join our vibrant community of vendors! Contact us for booth availability and pricing.</p>
      <p>feel free to contact Us if you have any questions</p>
      <p>andrewl2@hawaii.edu</p>
      <p>Phone: (206) 403-6299</p>
    </Row>
  </Container>
);

export default Landing;
