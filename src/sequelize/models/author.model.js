const { DataTypes } = require("sequelize");

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
  sequelize.define(
    "author",
    {
      idAuthor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      jobTitle: DataTypes.STRING,
    },
    { freezeTableName: true },
    { timestamps: false }
  );
};
