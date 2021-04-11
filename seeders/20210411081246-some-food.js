"use strict";
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "food",
      [
        {
          item: "bread",
          calories: 290,
          userId: 2,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          item: "coffee",
          calories: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          item: "apple",
          calories: 52,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("food", null, {});
  },
};
