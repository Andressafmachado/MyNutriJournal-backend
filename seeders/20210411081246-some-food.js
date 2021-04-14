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

          createdAt: "2021-04-11T09:03:25.881Z",
          updatedAt: new Date(),
        },
        {
          item: "coffee",
          calories: 1,
          userId: 1,
          createdAt: "2021-04-11T09:03:25.881Z",
          updatedAt: new Date(),
        },
        {
          item: "apple",
          calories: 52,
          userId: 3,
          createdAt: "2021-04-10T09:03:25.881Z",
          updatedAt: new Date(),
        },
        {
          item: "coffee",
          calories: 1,
          userId: 3,
          createdAt: "2021-04-09T09:03:25.881Z",
          updatedAt: new Date(),
        },
        {
          item: "apple",
          calories: 52,
          userId: 3,
          createdAt: "2021-04-09T09:03:25.881Z",
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
