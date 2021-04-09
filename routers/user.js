const express = require("express");
const User = require("../models").user;
const Task = require("../models").task;
const Comments = require("../models").comments;

const { Router } = express;

const router = new Router();

// router.get("/", (request, response) => response.send("Welcome to user!"));

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
    const user = await User.findByPk(userId, {});

    if (!user) {
      res.status(404).send("User not found");
    } else if (user.isNutritionist) {
      const fullUser = await User.findByPk(userId, {
        include: [
          { model: User, as: "patients" },
          { model: Task },
          { model: Comments },
        ],
      });
      console.log("doctor with patients", fullUser.toJSON());
      res.send(fullUser);
    } else {
      const fullUser = await User.findByPk(userId, {
        include: [
          { model: User, as: "doctor" },
          { model: Task },
          { model: Comments },
        ],
      });
      console.log("patient with doctor", fullUser.toJSON());
      res.send(fullUser);
    }
  } catch (e) {
    console.log(e);
  }
});

// //Update an user
// //at terminal http PUT :4000/users/1 name="Andreia"
// router.put("/:userId", async (req, res, next) => {
//   try {
//     const userId = parseInt(req.params.userId);
//     const userToUpdate = await User.findByPk(userId);
//     if (!userToUpdate) {
//       res.status(404).send("User not found");
//     } else {
//       const updatedUser = await userToUpdate.update(req.body);
//       console.log(`UPDATE USER`, updatedUser);
//       res.json(updatedUser);
//     }
//   } catch (e) {
//     next(e);
//   }
// });

module.exports = router;
