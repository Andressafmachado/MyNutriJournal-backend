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
          email: "ana@jhonson.com",
          password: bcrypt.hashSync("ana", SALT_ROUNDS),
          image:
            "https://drturnersnutrition.com/wp-content/uploads/2019/07/diet_service_img-1.jpg",
          isDoctor: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Natalie Brady",
          email: "natalie@gmail.com",
          password: bcrypt.hashSync("natalie", SALT_ROUNDS),
          image:
            "https://res.cloudinary.com/andmachado/image/upload/v1618520399/xebmrx7qwarlkf2a1wwj.jpg",
          isDoctor: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Marie Luna",
          email: "marieluna@gmail.com",
          password: bcrypt.hashSync("natalie", SALT_ROUNDS),
          image:
            "https://res.cloudinary.com/andmachado/image/upload/v1618520409/v1uo0z7qpb1tyhukuxuk.jpg",
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
