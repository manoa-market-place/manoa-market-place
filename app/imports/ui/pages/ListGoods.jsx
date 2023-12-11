import React, { useEffect, useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Row, Form } from 'react-bootstrap';
import { Products } from '../../api/product/Products';
import LoadingSpinner from '../components/LoadingSpinner';
import Good from '../components/Good';

/* Renders a table containing all of the product documents. Use <productItemAdmin> to render each row. */
const ListGoods = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { products, ready } = useTracker(() => {
    // Get access to product documents.
    const productsSubscription = Meteor.subscribe(Products.allPublicationName);
    // Determine if the subscription is ready
    const rdy = productsSubscription.ready();
    // Get the product documents
    const productItems = Products.collection.find({}).fetch();
    return {
      products: productItems,
      ready: rdy,
    };
  }, []);
  const goods = products.filter((product) => product.owner !== Meteor.user().username);
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(goods);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const applySearch = () => {
    if (!searchTerm.trim()) {
      setData(goods);
      return;
    }

    const filteredData = goods.filter((item) => {
      const fieldsToSearch = ['name', 'time', 'cost', 'filter', 'appliances', 'ingredients', 'recipe'];

      return fieldsToSearch.some((field) => {
        const fieldValue = item[field];
        if (Array.isArray(fieldValue)) {
          return fieldValue.some(
            (element) => typeof element === 'string' &&
              element.toLowerCase().includes(searchTerm.toLowerCase()),
          );
        } if (typeof fieldValue === 'string') {
          return fieldValue.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return false;
      });
    });

    setData(filteredData);
  };

  useEffect(() => {
    if (ready) {
      applySearch();
    }
  }, [ready, searchTerm, products]);

  return ready ? (
    <Container id="search-page">
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <h1 className="text-center text-white">Goods for Sale</h1>
              <Form.Control
                type="text"
                name="search"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Row className="mt-4">
        {data.map((product, index) => (
          <Col key={index} sm={6} md={4} lg={6} className="mb-4">
            <Good good={product} />
          </Col>
        ))}
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default ListGoods;
