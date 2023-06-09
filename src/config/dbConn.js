const Sequelize = require("sequelize");
const config = require("config");

const dbConfig = config.get("database");

const sequelize = new Sequelize("hoaxify", "my-db-user", "pass1234", {
  dialect: dbConfig.dialect,
  storage: dbConfig.storage,
  logging: dbConfig.logging,
});

module.exports = sequelize;
