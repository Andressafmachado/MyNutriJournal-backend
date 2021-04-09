"use strict";
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tasks",
      [
        {
          name: "run",
          userId: 2,
          doctorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "walk",
          userId: 1,
          doctorId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tasks", null, {});
  },
};
