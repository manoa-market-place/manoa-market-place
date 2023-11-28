import { Meteor } from 'meteor/meteor';
import { Products } from '../../api/product/Products';
import { Services } from '../../api/service/Services';
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

const addService = (service) => {
  console.log(` Adding: ${service.lastName} (${service.owner})`);
  Services.collection.insert(service);
};

if (Services.collection.find().count() === 0) {
  if (Meteor.settings.defaultServices) {
    console.log('Creating default service');
    Meteor.settings.defaultServices.forEach(service => addService(service));
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
