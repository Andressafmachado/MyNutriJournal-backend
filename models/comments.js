"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comments.belongsTo(models.user);
      comments.belongsTo(models.doctor);
    }
  }
  comments.init(
    {
      name: {
        type: DataTypes.STRING,
      },

      content: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "comments",
    }
  );
  return comments;
};
