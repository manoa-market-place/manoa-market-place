import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The ProductsCollection. It encapsulates state and variable values for stuff.
 */
class ProductsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ProductsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      name: String,
      price: Number,
      image: String,
      condition: String,
      color: String,
      quantity: Number,
      owner: String,
      status: {
        type: String,
        allowedValues: ['available', 'inCart', 'checkedOut', 'Sold'],
        defaultValue: 'available',
      },
      description: {
        type: String,
        defaultValue: 'No description provided.',
      },
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
    this.allPublicationName = `${this.name}.publication.all`;
  }
}

/**
 * The singleton instance of the ProductsCollection.
 * @type {ProductsCollection}
 */
export const Products = new ProductsCollection();
