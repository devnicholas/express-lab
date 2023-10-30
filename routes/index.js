var express = require("express");
const UserController = require("../src/controllers/userController");
var router = express.Router();

/* GET home page. */
router.get("/", UserController.index)
router.get("/users", UserController.getAll)

module.exports = router;
