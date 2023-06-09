const User = require("../user/User");
const bcrypt = require("bcryptjs");

const save = async (body) => {
  const hash = await bcrypt.hash(body.password, 10);
  // const user = Object.assign({}, req.body, {password:hash}) method1
  const user = { ...body, password: hash };
  await User.create(user);
};

module.exports = { save };
