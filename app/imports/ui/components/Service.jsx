import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Service table. See pages/ListService.jsx. */
const Service = ({ service }) => (
  <Card className="h-100">
    <Card.Header>
      <Image fluid src={service.image} />
      <Card.Title>Service: {service.service}</Card.Title>
      <Card.Subtitle>${service.price}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>Description: {service.description}</Card.Text>
      <Card.Text>Available Time: {service.availableTime}</Card.Text>
      <Card.Text>Contact Number: {service.contactNumber}</Card.Text>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Service.propTypes = {
  service: PropTypes.shape({
    service: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
    availableTime: PropTypes.string,
    contactNumber: PropTypes.number,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Service;
