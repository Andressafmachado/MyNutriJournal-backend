const express = require("express");
const User = require("../models").user;
const Task = require("../models").task;
const Comments = require("../models").comments;

const { Router } = express;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    console.log("Im getting all the users");
    const users = await User.findAll({});
    res.send(users);
  } catch (e) {
    next(e);
  }
});

//GET an user by id
//OPEN AT THE BROWSER localhost:4000/user/id
router.get("/:userId", async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, {
      include: [{ model: Comments }, { model: Task }],
    });

    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
