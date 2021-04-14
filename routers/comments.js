const express = require("express");
const Comments = require("../models").comments;
const User = require("../models").user;

const { Router } = express;

const router = new Router();

//getting all comments
router.get("/comments", async (req, res, next) => {
  try {
    console.log("Im getting all comments");
    const comments = await Comments.findAll({});
    res.send(comments);
  } catch (e) {
    next(e);
  }
});

//adding new comment
router.post("/comments", async (req, res) => {
  const { name, content, doctorId, userId } = req.body;
  if (!name || !content || !doctorId || !userId) {
    return res.status(400).send("Please try again");
  }

  try {
    const newComment = await Comments.create({
      name,
      content,
      doctorId,
      userId,
    });

    res.status(201).json({ ...newComment.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).send({ message: "There is an error" });
    }

    return res.status(400).send({ message: "There is an error" });
  }
});

//comments for a user
router.get("/users/:userId/comments", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, {
      include: [Comments],
    });
    if (user) {
      res.send(user.comments);
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
