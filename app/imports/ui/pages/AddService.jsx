import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Services } from '../../api/service/Services';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  service: String,
  price: Number,
  image: String,
  description: String,
  availableTime: String,
  contactNumber: Number,
});

const bridge = new SimpleSchema2Bridge(formSchema);

const handleFileChange = (event, formRef) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target.result;
      formRef.change('image', base64);
    };
    reader.readAsDataURL(file);
  }
};

/* Renders the AddStuff page for adding a document. */
const AddService = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { service, price, image, description, availableTime, contact } = data;
    const owner = Meteor.user().username;
    Services.collection.insert(
      { service, price, image, description, availableTime, contact, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      },
    );
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Add Service</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <input name="image" type="file" onChange={(event) => handleFileChange(event, fRef)} />
                <TextField name="service" />
                <TextField name="price" />
                <TextField name="availableTime" />
                <TextField name="contactNumber" />
                <LongTextField name="description" />
                <SubmitField className="text-center" value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddService;
