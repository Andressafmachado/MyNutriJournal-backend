const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Doctor = require("../models/").doctor;
const { SALT_ROUNDS } = require("../config/constants");
const doctorAuthMiddleware = require("../auth/middlewareDoctor");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, ...user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

//doctor login
router.post("/logindoctor", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const doctor = await Doctor.findOne({ where: { email } });

    if (!doctor || !bcrypt.compareSync(password, doctor.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete doctor.dataValues["password"]; // don't send back the password hash
    //SOLVE PROBLEM HERE
    const token = toJWT({ doctorId: doctor.id });
    return res.status(200).send({ token, ...doctor.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

//signup as user
router.post("/signup", async (req, res) => {
  const {
    email,
    password,
    name,
    age,
    height,
    weight,
    gender,
    exerciseDaily,
    doctorId,
    image,
  } = req.body;
  if (
    !email ||
    !password ||
    !name ||
    !age ||
    !height ||
    !weight ||
    !gender ||
    !exerciseDaily
  ) {
    return res.status(400).send("Please fill the entire form!");
  }

  if (age < 20) {
    return res
      .status(400)
      .send("Sorry, this app was designed to be used by people older than 20!");
  }

  if (weight < 30 || weight > 300) {
    return res
      .status(400)
      .send("Please, for weight provide a number between 30 and 300kg");
  }

  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
      age,
      height,
      weight,
      gender,
      exerciseDaily,
      doctorId,
      image,
    });
    console.log("newUser", newUser);
    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, ...newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

//sign up as a doctor
router.post("/signupdoctor", async (req, res) => {
  const { email, password, name, image } = req.body;
  if (!email || !password || !name) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    const newUser = await Doctor.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
      image,
    });

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, ...newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues });
});

router.get("/meDoctor", doctorAuthMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.doctor.dataValues["password"];
  res.status(200).send({ ...req.doctor.dataValues });
});

module.exports = router;
