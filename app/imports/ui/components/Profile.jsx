import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Profile = ({ profile }) => (
  <Card border="info" id="my-profile" className="h-100">
    <Card.Header>
      <Card.Title>{profile.firstName} {profile.lastName}</Card.Title>
      <Card.Subtitle>{profile.phoneNumber}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>TBD</Card.Text>
      <Link to={`/profile/${profile._id}`} id="edit-profile">Edit</Link>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Profile.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    phoneNumber: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Profile;
