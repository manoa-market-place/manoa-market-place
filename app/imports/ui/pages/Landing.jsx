import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { CartFill, PeopleFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-2">
    <Row className="text-center py-5">
      <Col className="text-white">
        <h1>Manoa Marketplace</h1>
        <p>Your online store for UHM student-related goods and services</p>
      </Col>
    </Row>
    <Card className="overview-section">
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
    </Card>
    <Row className="overview text-center">
      <Col>
        <h3>Welcome UHM Student</h3>
        <p>
          UHM students have a “rapid” churn rate in goods and services.
          Students leave the dorm for an on-campus apartment and need to get rid of dorm-specific stuff and acquire apartment-specific stuff.
          Students graduate and need to get rid of stuff because they’re moving off-island.
          There is therefore a tremendous amount of “campus-specific” goods and services that could be more effectively recycled and reused if there was an effective marketplace for these specific kinds of items.
        </p>
        <p>
          The Manoa Marketplace is an application for UHM students to facilitate buying and selling of student-related goods and services.
        </p>
        <p>
          References the
          {' '}
          <Link to="https://manoa-market-place.github.io/#user-guide">User Guide</Link>
          {' '}
          to get started, and sign up now!
        </p>
      </Col>
    </Row>
  </Container>
);

export default Landing;
