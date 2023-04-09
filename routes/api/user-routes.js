const router = require("express").Router();
const { getAllUsers } = require("../../controllers/users-controller.js");

router.route("/").get(getAllUsers);

module.exports = router;