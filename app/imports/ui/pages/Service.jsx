import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Service = () => {
  return (
    <div className="service-page">
      <h1 className="text-center">UH Manoa Market Services</h1>
      <section className="overview text-center">
        <h2>Overview</h2>
        <p>Idle goods trading platform, let you anytime, anywhere to sell fast, buy good, reliable, easy to get idle business!</p>
      </section>

      <section className="offer text-center">
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
      </section>

      <section className="intro text-center">
        <h2>Cash</h2>
        <p>take pictures and sell, idle items around you become valuable in 10 seconds</p>
        <h2>Save Money</h2>
        <p>new idle value second-hand waiting for you to search</p>
        <h2>Environmental protection</h2>
        <p>eliminate waste, idle can also glow new value</p>
      </section>

      <section className="vendor-information text-center">
        <h2>Become a Vendor</h2>
        <p>Interested in selling your goods? Join our vibrant community of vendors! Contact us for booth availability and pricing.</p>
        <p>feel free to contact Us if you have any questions</p>
        <p>andrewl2@hawaii.edu</p>
        <p>Phone: (206) 403-6299</p>
      </section>
    </div>
  );
};

export default Service;