const { User } = require("../models");
const userController = {
    createUsers({body}, res) {
        User.create(body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err))
    },
    getAllUsers(req, res) {
        User.find({})
        .then((user) => res.json(user))
        console.log("\n\n\n")
        console.log("Hello");
        //console.log(res)
        console.log("\n\n\n")
        .catch((err) => res.status(500).json(err))
    }
}

module.exports = userController;