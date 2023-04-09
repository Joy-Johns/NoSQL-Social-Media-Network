const { User } = require("../models");
const userController = {
    getAllUsers(req, res) {
        User.find({})
        .populate({path: "username", select: "-__v"})
        .select("-__v")
        .then(dbUsersData => res.json(dbUsersData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }
}

module.exports = userController;