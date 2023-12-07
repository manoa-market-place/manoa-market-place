import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import { UserProfile } from '../../api/profile/UserProfile';
import LoadingSpinner from '../components/LoadingSpinner';
import Profile from '../components/Profile';

const bridge = new SimpleSchema2Bridge(UserProfile.schema);

/* Renders the EditStuff page for editing a single document. */
const MyProfile = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // console.log('EditStuff', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready, profiles } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(UserProfile.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const profileItems = UserProfile.collection.find({}).fetch();
    const document = UserProfile.collection.findOne(_id);
    return {
      profiles: profileItems,
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  // console.log('EditStuff', doc, ready);
  // On successful submit, insert the data.
  const submit = (data) => {
    const { firstName, lastName, phoneNumber } = data;
    UserProfile.collection.update(_id, { $set: { firstName, lastName, phoneNumber } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>My Profile</h2></Col>
          <Row>
            {profiles.map((profile) => (<Col key={profile._id}><Profile profile={profile} /></Col>))}
          </Row>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <Row>
                  <Col><TextField name="firstName" /></Col>
                  <Col><TextField name="lastName" /></Col>
                  <Col><TextField name="phoneNumber" /></Col>
                  <Col><TextField label="Email" name="owner" /></Col>
                </Row>
                <SubmitField />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default MyProfile;
