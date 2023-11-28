import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The ProductsCollection. It encapsulates state and variable values for stuff.
 */
class ProductsInCartCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ProductsInCartCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      productId: String,
      checkedOutBy: String,
      checkedOutAt: Date,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the ProductsInCartCollection.
 * @type {ProductsInCartCollection}
 */
export const ProductsInCart = new ProductsInCartCollection();
