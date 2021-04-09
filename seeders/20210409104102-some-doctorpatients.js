"use strict";
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "doctorpatients",
      [
        {
          doctorId: 1,
          patientId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doctorId: 1,
          patientId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("doctorpatients", null, {});
  },
};
