const app = require("./src/server");
const sequelize = require("./src/config/dbConn");

sequelize.sync();

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

module.exports = app;
