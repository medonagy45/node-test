const { models, Sequelize } = require("../sequelize");
const Op = Sequelize.Op;
var Article = models.article;

async function index(req, res) {
  article = await Article.findAll();
  res.status(200).json(article);
}

async function show(req, res) {
  const id = req.params.article_id;
  const article = await Article.findByPk(id);
  if (article) {
    res.status(200).json(article);
  } else {
    res.status(404).send("404 - Not found");
  }
}

async function create(req, res) {
  Article.create(req.body)
    .then((text) => console.log(text))
    .catch((error) => console.log(error));
  res.status(201).end();
}

async function update(req, res) {
  const id = req.params.article_id;

  // We only accept an UPDATE request if the `:id` param matches the body `id`
  if (req.body.id === id) {
    await Article.update(req.body, {
      where: {
        idArticle: idArticle,
      },
    });
    res.status(200).end();
  } else {
    res
      .status(400)
      .send(
        `Bad request: param ID (${id}) does not match body ID (${req.body.id}).`
      );
  }
}
async function search(req, res) {
  console.log("req.params.search", req.params.search);
  const searchParam = req.params.search;
  const article = await Article.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: "%" + searchParam + "%" } },
        { body: { [Op.like]: "%" + searchParam + "%" } },
      ],
    },
  });
  if (article) {
    res.status(200).json(article);
  } else {
    res.status(404).send("404 - Not found");
  }
}
async function addComment(req, res) {
  const id = req.params.article_id;
  let article = await Article.findByPk(id);
  if (article) {
    console.log(req.body.comment);
    if (article.comments)
      article.comments = article.comments.concat("," + req.body.comment);
    else article.comments = req.body.comment;
    console.log(article.comments);
    article = await article.save();
    res.status(200).json(article);
  } else {
    res.status(404).send("404 - Not found");
  }
}
async function addLike(req, res) {
  const id = req.params.article_id;
  const article = await Article.findByPk(id);
  if (article) {
    article.increment("likes");
    res.status(200).json(article);
  } else {
    res.status(404).send("404 - Not found");
  }
}
module.exports = {
  index,
  show,
  create,
  update,
  search,
  addComment,
  addLike,
};
