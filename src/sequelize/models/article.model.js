const { DataTypes } = require("sequelize");

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
  sequelize.define(
    "article",
    {
      idArticle: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      body: DataTypes.STRING,
      likes: { type: DataTypes.INTEGER, defaultValue: 0 },
      comments: { type: DataTypes.STRING },
    },
    { freezeTableName: true },
    { timestamps: false }
  );
};
