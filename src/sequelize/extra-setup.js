function applyExtraSetup(sequelize) {
  const { article, author } = sequelize.models;

  author.hasMany(article);
  article.belongsTo(author);
}

module.exports = { applyExtraSetup };
