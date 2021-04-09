"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.belongsToMany(models.user, {
        through: "doctorpatients",
        foreignKey: "doctorId",
        as: "patients",
      });
      user.belongsToMany(models.user, {
        through: "doctorpatients",
        foreignKey: "patientId",
        as: "doctor",
      });
    }
  }
  user.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isNutritionist: {
        type: DataTypes.BOOLEAN,
      },
      age: {
        type: DataTypes.INTEGER,
      },

      height: {
        type: DataTypes.STRING,
      },
      weight: {
        type: DataTypes.INTEGER,
      },
      gender: {
        type: DataTypes.STRING,
      },
      exerciseDaily: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
