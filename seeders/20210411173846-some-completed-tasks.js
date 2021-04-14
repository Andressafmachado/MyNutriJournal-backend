"use strict";
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "completedTasks",
      [
        {
          name: "run",
          userId: 3,
          createdAt: "2021-04-11T09:03:25.881Z",
          updatedAt: new Date(),
        },
        {
          name: "run",
          userId: 3,
          createdAt: "2021-04-12T09:03:25.881Z",
          updatedAt: new Date(),
        },
        {
          name: "walk",
          userId: 3,
          createdAt: "2021-04-11T09:03:25.881Z",
          updatedAt: new Date(),
        },
        {
          name: "walk",
          userId: 1,
          createdAt: "2021-04-10T09:03:25.881Z",
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("completedTasks", null, {});
  },
};
