"use strict";
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          content: "good morning",
          userId: 2,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "you got this",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "just do it",
          doctorId: 1,
          createdAt: new Date(),
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
