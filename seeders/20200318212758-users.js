"use strict";
const bcrypt = require("bcrypt");

const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "João Antonioli",
          email: "joao@gmail.com",
          password: bcrypt.hashSync("joao", SALT_ROUNDS),
          age: 32,
          height: "1.70",
          weight: 80,
          gender: "m",
          exerciseDaily: "no",
          doctorId: 2,
          image: "https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg",
          createdAt: "2021-01-01T09:03:25.881Z",
          updatedAt: new Date(),
        },
        {
          name: "Andreia Machado",
          email: "andreia@gmail.com",
          password: bcrypt.hashSync("andreia", SALT_ROUNDS),

          age: 36,
          height: "1.60",
          weight: 70,
          gender: "f",
          exerciseDaily: "no",
          doctorId: 2,
          image:
            "https://img.wattpad.com/34c8e085332bd525822705be5fe4a2cc0499b1e6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6e5862756a386778775a462d39673d3d2d3834313037393131342e3135663534336266633234386335336532333431373633303735342e6a7067?s=fit&w=720&h=720",
          createdAt: "2021-02-01T09:03:25.881Z",
          updatedAt: new Date(),
        },
        {
          name: "Renan Michels",
          email: "renan@gmail.com",
          password: bcrypt.hashSync("renan", SALT_ROUNDS),
          age: 32,
          height: "1.70",
          weight: 85,
          gender: "m",
          exerciseDaily: "no",
          doctorId: 2,
          image:
            "https://www.eharmony.com/blog/wp-content/uploads/2017/07/short-men-and-dating-e1499470604767.jpg",
          createdAt: "2021-03-01T09:03:25.881Z",
          updatedAt: new Date(),
        },
        {
          name: "Marina Barbosa",
          email: "marina@gmail.com",
          password: bcrypt.hashSync("marina", SALT_ROUNDS),
          age: 32,
          height: "1.70",
          weight: 60,
          gender: "f",
          exerciseDaily: "yes",
          doctorId: 2,
          image:
            "https://res.cloudinary.com/andmachado/image/upload/v1618519998/khxdj9hjvjz4zopy3srs.jpg",
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

//https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg
//https://www.eharmony.com/blog/wp-content/uploads/2017/07/short-men-and-dating-e1499470604767.jpg
//https://womensagenda.com.au/wp-content/uploads/2020/05/Sarah-Hill-002-1024x683.jpeg
//https://img.wattpad.com/34c8e085332bd525822705be5fe4a2cc0499b1e6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6e5862756a386778775a462d39673d3d2d3834313037393131342e3135663534336266633234386335336532333431373633303735342e6a7067?s=fit&w=720&h=720
