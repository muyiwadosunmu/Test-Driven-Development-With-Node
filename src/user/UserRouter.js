const express = require("express");
const { save } = require("./UserService");

const router = express.Router();

router.post("/api/1.0/users", async (req, res) => {
  await save(req.body);

  return res.send({
    message: "User Created",
  });
});

module.exports = router;