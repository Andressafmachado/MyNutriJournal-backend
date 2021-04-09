"use strict";
const bcrypt = require("bcrypt");

const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Doctor",
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          isNutritionist: true,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Andreia",
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          isNutritionist: false,
          age: 32,
          height: "1,60",
          weight: 70,
          gender: "f",
          exerciseDaily: "no",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "renan",
          email: "b@a.com",
          password: bcrypt.hashSync("b", SALT_ROUNDS),
          isNutritionist: false,
          age: 32,
          height: "1,70",
          weight: 85,
          gender: "m",
          exerciseDaily: "no",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
