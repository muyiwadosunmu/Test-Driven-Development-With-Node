const express = require("express");
const { check, validationResult } = require("express-validator");
const { save } = require("./UserService");

const router = express.Router();

/* const validateUsername = (req, res, next) => {
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

*/

router.post(
  "/api/1.0/users",
  check("username").notEmpty().withMessage("Username cannot be null"),
  check("email").notEmpty().withMessage("E-mail cannot be null"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const validationErrors = {};
      errors.array().forEach((error) => {
        validationErrors[error.path] = error.msg;
      });
      return res.status(400).send({ validationErrors: validationErrors });
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
