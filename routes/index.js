var express = require("express");
const UserController = require("../src/controllers/userController");
var router = express.Router();

/* GET home page. */
router.get("/", UserController.getAll)

module.exports = router;
