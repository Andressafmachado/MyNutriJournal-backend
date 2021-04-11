const express = require("express");
const User = require("../models").user;
const Task = require("../models").task;
const Comments = require("../models").comments;
const Doctor = require("../models").doctor;

const { Router } = express;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    console.log("Im getting all doctors");
    const doctors = await Doctor.findAll({});
    res.send(doctors);
  } catch (e) {
    next(e);
  }
});

//GET an user by id
router.get("/:doctorId", async (req, res) => {
  try {
    const doctorId = parseInt(req.params.doctorId);
    const doctor = await Doctor.findByPk(doctorId, {
      include: [
        {
          model: User,
          //attributes: ["name"]
        },
        { model: Comments },
        { model: Task },
      ],
    });

    if (!doctor) {
      res.status(404).send("doctor not found");
    } else {
      res.send(doctor);
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
