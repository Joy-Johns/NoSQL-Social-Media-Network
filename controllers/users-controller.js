const { User } = require("../models");
const req = require("express/lib/request");

const userController = {
    getAllUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));

    },

    createUsers(req, res) {
        User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err));
    },

    // update user by id
    updateUser(req, res) {
        console.log("update User got call from user controller")
        User.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: req.body
        }, {
            runValidators: true,
            new: true
        }).then((user) => {
            !user ? res.status(404).json({ message: 'No user' }) : res.json(user);

        }).catch((err) => res.status(500).json(err));


    },

    // add a new Friend
    addFriend(req, res) {
        console.log("addFriend got call from user controller")
        console.log(req.body);
        User.findOneAndUpdate({
            _id: req.params.id
        }, {
            $addToSet: {
                friends: req.params.friendsId
            }
        }, {
            runValidators: true,
            new: true
        })
        .then((user) => !user ? res.status(404).json({ message: 'No friend with id ' + req.params.friendsId + ' does not exist' }) : res.json(user))
        .catch((err) => res.status(500).json(err));
    }


}

module.exports = userController;