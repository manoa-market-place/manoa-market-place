import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Image } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';

/** Renders a single row in the List Product table. See pages/ListProduct.jsx. */
const ServiceItem = ({ service, collection }) => {
  const removeItem = (docID) => {
    // eslint-disable-next-line no-console
    console.log(`The item to remove is ${docID}`);
    collection.remove(docID);
  };
  return (
    <Card className="h-100">
      <Card.Header>
        <Image fluid src={service.image} />
        <Card.Title>Name: {service.service}</Card.Title>
        <Card.Subtitle>${service.price}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>Condition: {service.description}</Card.Text>
        <Card.Text>Color: {service.availableTime}</Card.Text>
        <Button variant="danger" className="float-start" onClick={() => removeItem(service._id)}><Trash /></Button>
      </Card.Body>
    </Card>
  );
};

// Require a document to be passed to this component.
ServiceItem.propTypes = {
  service: PropTypes.shape({
    price: PropTypes.number,
    service: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    availableTime: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  collection: PropTypes.object.isRequired,
};

export default ServiceItem;
