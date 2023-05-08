
const { Thought, User } = require("../models");

const thoughtController = {
    // get all thoughts
    get_All_the_Thoughts(req, res) {
        Thought.find().then((thought) => res.json(thought)).catch((err) => res.status(500).json(err));

    },
    // get one thought by it's id
    // create thought to a user
    add_new_Thought(req, res) {
    Thought.create(req.body)
    .then((dbThoughtData) => {
        return User.findOneAndUpdate(
            {_id:req.body.userID},
            {$push:{ thoughts:dbThoughtData._id}},
            {new:true}

        )
        
    })
    .then(userData => res.json(userData))
    .catch((err) => res.status(500).json(err));
    },
    //update thought by it's id
    update_the_Thought(req, res) {
        Thought.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: req.body
        }, {
            runValidators: true,
            new: true
        }).then((thought) => {
            !thought ? res.status(404).json({message: 'No thought by ID'}) : res.json(thought);

        }).catch((err) => res.status(500).json(err));


    }




}

module.exports = thoughtController;