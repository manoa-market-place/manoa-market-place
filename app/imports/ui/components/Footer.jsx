import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-dark">
    <Container>
      <Row>
        <Col lg={6} className="text-start">
          <h5>Address</h5>
          2500 Campus Rd
          <br />
          University of Hawaii at Manoa
          <br />
          Honolulu, HI 96822
        </Col>
        <Col lg={6} className="text-end">
          <h5>Contact Us</h5>
          andrewl2@hawaii.edu
          <br />
          (206) 403-6299
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
