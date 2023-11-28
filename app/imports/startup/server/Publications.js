import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Products } from '../../api/product/Products';
import { Services } from '../../api/service/Services';
import { UserProfile } from '../../api/profile/UserProfile';

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise, publish nothing.

// User product publication
Meteor.publish(Products.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Products.collection.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish(Services.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Services.collection.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish(UserProfile.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return UserProfile.collection.find({ owner: username });
  }
  return this.ready();
});
// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise, publish nothing.

Meteor.publish(Products.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Products.collection.find();
  }
  return this.ready();
});

Meteor.publish(Services.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Services.collection.find();
  }
  return this.ready();
});

Meteor.publish(UserProfile.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return UserProfile.collection.find();
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
