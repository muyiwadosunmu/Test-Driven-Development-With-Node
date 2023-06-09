const express = require("express");
const { save } = require("./UserService");

const router = express.Router();

const validateUsername = (req, res, next) => {
  const user = req.body;
  const { username, email, password } = req.body;
  if (username === null) {
    req.validationErrors = { username: "Username cannot be null" };
  }
  next();
};

const validateEmail = (req, res, next) => {
  const user = req.body;
  const { username, email, password } = req.body;
  if (email === null) {
    req.validationErrors = {
      ...req.validationErrors,
      email: "E-mail cannot be null",
    };
  }
  next();
};

router.post(
  "/api/1.0/users",
  validateUsername,
  validateEmail,
  async (req, res) => {
    if (req.validationErrors) {
      const response = { validationErrors: { ...req.validationErrors } };
      return res.status(400).send(response);
    }
    await save(req.body);
    return res.send({
      message: "User Created",
    });
  }
);

// const object = {
//   username: "user1",
//   email: "user1@mail.com",
// };

// const keys = Object.keys(object);
// //Never use Object.keys() with numbers as it rearranges it accoredingly but with strings we should be fine
// console.log(keys);

module.exports = router;
