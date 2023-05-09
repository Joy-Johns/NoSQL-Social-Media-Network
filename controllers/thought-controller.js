
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


    },

    //   get_a_Thought_ById
    get_a_Thought_ById({ params }, res) {
        Thought.findOne({ _id: params.id })
        .then((dbThoughtData) => {
            // if no thought is found
            if (!dbThoughtData) {
            res.status(404).json({ message: "No thought with this ID" });
            return;
            }
            res.json(dbThoughtData);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // delete a thought
    delete_the_Thought(req, res) {
        Thought.findOneAndDelete({_id: req.params.id})
        .then((thought) => {
            if(!thought){
                res.status(404).json({message: 'No thought with that ID'}) 


            }      
            
            return User.findOneAndUpdate(
                {_id:req.body.userID},
                {$pull:{thoughts:thought._id}},
                {new:true}
    
            )
    }).then(() => res.json({message: 'though deleted!'})).catch((err) => res.status(500).json(err));
    },
    
    // add Reaction
    add_new_Reaction(req, res) {
        console.log('You are adding a reaction');
        console.log(req.body);
        Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body} },
        { runValidators: true, new: true }
        )
        .then((thought) =>
            !thought
            ? res
                .status(404)
                .json({ message: 'No reaction found ' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    //delete Reaction
    delete_the_Reaction(req, res) {
    console.log(req.params)

        Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId} } },
        { runValidators: true, new: true }
        )
        .then((thought) =>
            !thought
            ? res
                .status(404)
                .json({ message: 'No thought found with that ID' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    }

}

module.exports = thoughtController;