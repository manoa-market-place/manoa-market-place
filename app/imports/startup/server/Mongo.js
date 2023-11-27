import { Meteor } from 'meteor/meteor';
import { Products } from '../../api/product/Products';
import { UserProfile } from '../../api/profile/UserProfile';

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

const addUserProfile = (profile) => {
  console.log(` Adding User: ${profile.firstName} ${profile.lastName} (${profile.owner})`);
  UserProfile.collection.insert(profile);
};

if (UserProfile.collection.find().count() === 0) {
  if (Meteor.settings.defaultUserProfiles) {
    console.log('Creating default user profiles');
    Meteor.settings.defaultUserProfiles.forEach(profile => addUserProfile(profile));
  }
}
