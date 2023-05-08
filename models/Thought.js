

const {Schema, model, Types} = require("mongoose");
const date = require('moment');


// `thoughtText`,`createdAt`,`username`,`reactions`
const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) =>  date(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'),
      },
      username: {
        type: String,
        required: true,
      },
      reactions: [reactionSchema],
    },
    {
      toJSON: {
        virtuals: true,
        getters: true,
      },
      id: false,
    }
  );


  
  const Thought = model("Thought", thoughtSchema);
  
  module.exports = Thought;