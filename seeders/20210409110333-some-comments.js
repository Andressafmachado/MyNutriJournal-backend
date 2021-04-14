"use strict";
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          name: "Ana",
          content: "good morning",
          userId: 3,
          doctorId: 1,
          createdAt: "2021-04-10T09:03:25.881Z",
          updatedAt: new Date(),
        },
        {
          name: "Ana",
          content: "you got this",
          userId: 3,
          doctorId: 1,
          createdAt: "2021-04-11T09:03:25.881Z",
          updatedAt: new Date(),
        },
        {
          name: "Ana",
          content: "just do it",
          userId: 3,
          doctorId: 1,
          createdAt: "2021-04-09T09:03:25.881Z",
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
