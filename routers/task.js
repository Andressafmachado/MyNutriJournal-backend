const express = require("express");
const Task = require("../models").task;
const User = require("../models").user;

const { Router } = express;

const router = new Router();

//getting all tasks
router.get("/tasks", async (req, res, next) => {
  try {
    console.log("Im getting all tasks");
    const users = await Task.findAll({});
    res.send(users);
  } catch (e) {
    next(e);
  }
});

//adding new task
router.post("/tasks", async (req, res) => {
  const { name, status, doctorId, userId } = req.body;
  if (!name || !userId) {
    return res.status(400).send("Please try again");
  }

  try {
    const newTask = await Task.create({
      name,
      userId,
      doctorId,
      status,
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

//tasks for a user
router.get("/users/:userId/tasks", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, {
      include: [Task],
    });
    if (user) {
      res.send(user.tasks);
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
