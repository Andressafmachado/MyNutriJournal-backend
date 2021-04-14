"use strict";
const bcrypt = require("bcrypt");

const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "doctors",
      [
        {
          name: "Ana Jhonson",
          email: "1@1.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          image:
            "https://drturnersnutrition.com/wp-content/uploads/2019/07/diet_service_img-1.jpg",
          isDoctor: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Natalie Brady",
          email: "natalie@gmail.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          image:
            "https://www.nataliebrady.co.nz/wp-content/uploads/2020/02/Auckland-nutritionist.jpg",
          isDoctor: true,
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
