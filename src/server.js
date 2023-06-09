const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const UserRouter = require("./user/UserRouter");

dotenv.config({ path: "../config.env" });
const app = express();

app.use(express.json());

app.use(UserRouter);

console.log("env: " + process.env.NODE_ENV);

module.exports = app;
