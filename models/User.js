// Define Mongoose
const mongoose = require('mongoose');

// Create a new instance of the Mongoose schema to define shape of each document

const userSchema = new mongoose.Schema({
  // Add individual properties and their types
  username: { type: String, unique: true, required: true, trim: true },
  email: { type: String, required: true, unique: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Email invalid. Please try again."]},

  thoughts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thought' }],
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
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