const express = require("express");
const Food = require("../models").food;
const User = require("../models").user;

const { Router } = express;

const router = new Router();

//getting all food
router.get("/food", async (req, res, next) => {
  try {
    console.log("Im getting all the food");
    const users = await Food.findAll({});
    res.send(users);
  } catch (e) {
    next(e);
  }
});

//adding new food
router.post("/food", async (req, res) => {
  const { item, calories, userId } = req.body;
  if (!item || !calories || !userId) {
    return res.status(400).send("Please try again");
  }

  try {
    const newFood = await Food.create({
      item,
      calories,
      userId,
    });

    //   delete newUser.dataValues["password"]; // don't send back the password hash

    //   const token = toJWT({ userId: newUser.id });

    res.status(201).json({ ...newFood.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).send({ message: "There is an error" });
    }

    return res.status(400).send({ message: "you add a food" });
  }
});

//food for a user
router.get("/users/:userId/food", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, {
      include: [Food],
    });
    if (user) {
      res.send(user.food);
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
