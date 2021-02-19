const { models } = require("../sequelize");
var Author = models.author;
// const Author = AuthorModel(Sequelize, DataTypes);

async function index(req, res) {
  const authors = await Author.findAll();
  res.status(200).json(authors);
}

async function show(req, res) {
  const id = req.params.author_id;
  const author = await Author.findByPk(id);
  if (author) {
    res.status(200).json(author);
  } else {
    res.status(404).send("404 - Not found");
  }
}

async function create(req, res) {
  let author = Author.create(req.body);
  res.status(201).json(author);
}

module.exports = {
  index,
  show,
  create,
};
