// const mongoose = require('mongoose');

// const thoughtSchema = new mongoose.Schema({
 
//   thoughtText: { type: String, required: true, maxlength: 280 },
//  // createAt: { type: Date, default: Date.now, getter: true, validate: [validateEmail], match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]},
//     // https://stackoverflow.com/questions/70724966/how-to-use-getter-or-setter-with-mongoose-timestamps

//   thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
//   friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
//   },
//   {
//     toJSON: { virtuals: true,}, id: false,
//   }
// );
// // Create a virtual property 'friendCount' that retrieves the length of the friends array field on query (act.21)
// userSchema.virtual('friendCount').get(function () {
//     return this.friends.length;
//   });
// // 'User' is the name of the model
// // userSchema is the name of the schema we are using to create a new instance of the model
// const User = mongoose.model('User', userSchema);

// module.exports = User;