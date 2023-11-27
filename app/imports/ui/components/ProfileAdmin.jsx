import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Profile = ({ profile }) => (
  <Card className="h-100">
    <Card.Header>
      <Card.Title>{profile.firstName} {profile.lastName}</Card.Title>
      <Card.Subtitle>{profile.phoneNumber}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>Products: </Card.Text>
      <footer className="blockquote-footer">{profile.owner}</footer>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Profile.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    phoneNumber: PropTypes.string,
    owner: PropTypes.string,
    // _id: PropTypes.string,
  }).isRequired,
};

export default Profile;
