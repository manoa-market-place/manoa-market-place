import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The ServicesCollection. It encapsulates state and variable values for stuff.
 */
class ServicesCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ServicesCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      service: String,
      price: Number,
      image: String,
      description: String,
      availableTime: String,
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
 * The singleton instance of the ServicesCollection.
 * @type {ServicesCollection}
 */
export const Services = new ServicesCollection();
