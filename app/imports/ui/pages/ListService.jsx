import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Services } from '../../api/service/Services';
import LoadingSpinner from '../components/LoadingSpinner';
import Service from '../components/Service';

/* Renders a table containing all of the Service documents. Use <Service> to render each row. */
const ListService = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, services } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Service documents.
    const subscription = Meteor.subscribe(Services.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Service documents
    const serviceItems = Services.collection.find({}).fetch();
    return {
      services: serviceItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container id="list-services-page" className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center text-white">
            <h2>Service</h2>
          </Col>
          <Row xs={1} md={2} lg={3} className="g-4">
            {services.map((service) => (<Col key={service._id}><Service service={service} /></Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListService;
