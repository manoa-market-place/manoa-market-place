import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The UserProfileCollection. It encapsulates state and variable values for a user's profile information.
 */
class UserProfileCollection {
  constructor() {
    // The name of this collection.
    this.name = 'UserProfileCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      firstName: String,
      lastName: String,
      phoneNumber: String,
      owner: String,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the UserProfileCollection.
 * @type {UserProfileCollection}
 */
export const UserProfile = new UserProfileCollection();
