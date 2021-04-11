"use strict";
const bcrypt = require("bcrypt");

const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Andressa",
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          age: 32,
          height: "1.60",
          weight: 70,
          gender: "f",
          exerciseDaily: "no",
          doctorId: 1,
          createdAt: "2021-01-01T09:03:25.881Z",
          updatedAt: new Date(),
        },
        {
          name: "Andreia",
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),

          age: 32,
          height: "1.60",
          weight: 70,
          gender: "f",
          exerciseDaily: "no",
          doctorId: 2,
          createdAt: "2021-02-01T09:03:25.881Z",
          updatedAt: new Date(),
        },
        {
          name: "renan",
          email: "b@a.com",
          password: bcrypt.hashSync("b", SALT_ROUNDS),

          age: 32,
          height: "1.70",
          weight: 85,
          gender: "m",
          exerciseDaily: "no",
          doctorId: 1,
          createdAt: "2021-03-01T09:03:25.881Z",
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
