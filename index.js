var configuredApp = require("./app.config.js");
const sequelize = require("./src/sequelize");

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
configuredApp.listen(3000, () =>
  console.log("Web App listening on port 3000! Serving Over HTTP")
);
