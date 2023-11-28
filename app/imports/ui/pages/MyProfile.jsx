import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import { UserProfile } from '../../api/profile/UserProfile';
import Profile from '../components/Profile';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const MyProfile = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, profile } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(UserProfile.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const profileItem = UserProfile.collection.find({}).fetch();
    return {
      profile: profileItem,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Container id="my-profile-page" className="py-3">
      <Row className="justify-content-center">
        <Col md="auto" className="text-center">
          <h2>My Profile</h2>
        </Col>
      </Row>
      <Row className="g-4 justify-content-center">
        <Col xs={4}>
          <Profile profile={profile[0]} />
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default MyProfile;
