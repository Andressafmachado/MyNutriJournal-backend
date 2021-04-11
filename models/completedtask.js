"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class completedTask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      completedTask.belongsTo(models.user);
    }
  }
  completedTask.init(
    {
      name: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "completedTask",
    }
  );
  return completedTask;
};
