const express = require("express");
const CompletedTask = require("../models").completedTask;
const User = require("../models").user;

const { Router } = express;

const router = new Router();

//getting all completed tasks
router.get("/completedtasks", async (req, res, next) => {
  try {
    console.log("Im getting all completed tasks");
    const users = await CompletedTask.findAll({});
    res.send(users);
  } catch (e) {
    next(e);
  }
});

//adding new task
router.post("/completedtasks", async (req, res) => {
  const { name, doctorId, userId } = req.body;
  if (!name || !userId) {
    return res.status(400).send("Please try again");
  }

  try {
    const newTask = await CompletedTask.create({
      name,
      userId,
      doctorId,
    });
    //   delete newUser.dataValues["password"]; // don't send back the password hash
    //   const token = toJWT({ userId: newUser.id });
    res.status(201).json({ ...newTask.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).send({ message: "There is an error" });
    }

    return res.status(400).send({ message: "you added a task" });
  }
});

//completed tasks for a user
router.get("/users/:userId/completedtasks", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, {
      include: [CompletedTask],
    });
    if (user) {
      res.send(user.completedTasks);
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
