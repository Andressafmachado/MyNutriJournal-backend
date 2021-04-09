"use strict";
const bcrypt = require("bcrypt");

const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "doctors",
      [
        {
          name: "nutri",
          email: "1@1.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "doc",
          email: "adoc@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("doctors", null, {});
  },
};
