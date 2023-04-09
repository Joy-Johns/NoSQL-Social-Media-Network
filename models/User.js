// Define Mongoose
const mongoose = require('mongoose');

// Create a new instance of the Mongoose schema to define shape of each document
const userSchema = new mongoose.Schema({
  // Add individual properties and their types
  username: { type: String, unique: true, required: true, trimmed: true },
  email: { type: String, required: true, unique: true, validate: [validateEmail], match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]},
    // https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax

  thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    toJSON: { virtuals: true,}, id: false,
  }
);
// Create a virtual property 'friendCount' that retrieves the length of the friends array field on query (act.21)
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });
// 'User' is the name of the model
// userSchema is the name of the schema we are using to create a new instance of the model
const User = mongoose.model('User', userSchema);

module.exports = User;