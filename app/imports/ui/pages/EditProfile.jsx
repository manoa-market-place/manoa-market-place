import React from 'react';
import swal from 'sweetalert';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { useParams } from 'react-router';
import { AutoForm, ErrorsField, HiddenField, SubmitField, TextField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Card, Col, Container, Row } from 'react-bootstrap';
import LoadingSpinner from '../components/LoadingSpinner';
import { UserProfile } from '../../api/profile/UserProfile';

const bridge = new SimpleSchema2Bridge(UserProfile.schema);

const EditProfile = () => {
  const { _id } = useParams();
  const { doc, ready } = useTracker(() => {
    const subscription = Meteor.subscribe(UserProfile.userPublicationName);
    const rdy = subscription.ready();
    const document = UserProfile.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);

  const submit = (data) => {
    const { firstName, lastName, phoneNumber } = data;
    UserProfile.collection.update(_id, { $set: { firstName, lastName, phoneNumber } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Your profile has been updated', 'success')));
  };

  return ready ? (
    <Container>
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Your Profile</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <Row>
                  <Col><TextField name="firstName" /></Col>
                  <Col><TextField name="lastName" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="phoneNumber" /></Col>
                </Row>
                <SubmitField value="Submit" />
                <ErrorsField />
                <HiddenField name="owner" />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditProfile;
