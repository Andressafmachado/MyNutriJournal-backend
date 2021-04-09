"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class doctorpatient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      doctorpatient.belongsTo(models.user, {
        // foreignKey: "doctorId",
        // as: "a",
      });
      doctorpatient.belongsTo(models.user, {
        // foreignKey: "patientId",
        // as: "patient",
      });
    }
  }
  doctorpatient.init(
    {
      doctorId: DataTypes.INTEGER,
      patientId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "doctorpatient",
    }
  );
  return doctorpatient;
};
