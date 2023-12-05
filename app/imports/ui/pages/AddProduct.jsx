import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Products } from '../../api/product/Products';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  name: String,
  price: Number,
  image: String,
  condition: String,
  color: String,
  quantity: Number,
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
const AddProduct = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { name, price, image, condition, color, quantity } = data;
    const owner = Meteor.user().username;
    Products.collection.insert(
      { name, price, image, condition, color, quantity, owner },
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
    <Container id="add-product-page" className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Add Product</h2></Col>
          <AutoForm id="add-product-form" ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <input name="image" type="file" onChange={(event) => handleFileChange(event, fRef)} />
                <TextField name="name" />
                <TextField name="price" />
                <TextField name="condition" />
                <TextField name="color" />
                <TextField name="quantity" />
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

export default AddProduct;
