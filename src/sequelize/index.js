const { Sequelize } = require("sequelize");
const { applyExtraSetup } = require("./extra-setup");
var dotenv = require("dotenv");
var config = dotenv.config().parsed;

// In a real app, you should keep the database connection URL as an environment variable.
// But for this example, we will just use a local SQLite database.
const sequelize = new Sequelize(
  config.MYSQL_DB_NAME,
  config.MYSQL_DB_USER,
  config.MYSQL_DB_PASSWORD,
  {
    host: config.MYSQL_DB_HOST,
    dialect: "mysql",
    define: {
      timestamps: false,
    },
    // operatorsAliases: false,
  }
);
const modelDefiners = [
  require("./models/article.model"),
  require("./models/author.model"),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
