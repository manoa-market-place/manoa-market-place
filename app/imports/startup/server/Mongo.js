import { Meteor } from 'meteor/meteor';
import { Products } from '../../api/product/Products';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addProduct = (product) => {
  console.log(` Adding: ${product.name} (${product.owner})`);
  Products.collection.insert(product);
};

if (Products.collection.find().count() === 0) {
  if (Meteor.settings.defaultProducts) {
    console.log('Creating default product');
    Meteor.settings.defaultProducts.forEach(product => addProduct(product));
  }
}
