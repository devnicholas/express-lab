const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      timestamps: true,
      updatedAt: false,
    }
  );

  User.beforeCreate(async (user) => {
    if (user.password) {
      const salt = await bcrypt.genSaltSync(10, "a");
      user.password = bcrypt.hashSync(user.password, salt);
    }
  });
  User.beforeUpdate(async (user) => {
    if (user.password) {
      const salt = await bcrypt.genSaltSync(10, "a");
      user.password = bcrypt.hashSync(user.password, salt);
    }
  });

  return User;
};
