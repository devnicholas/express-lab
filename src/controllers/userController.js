const { user } = require("../models");

class UserController {
  static async getAll(req, res) {
    const list = await user.findAll();

    res.send(list);
  }

  static index(req, res) {
    res.send("Hello World!");
  }
}

module.exports = UserController;
