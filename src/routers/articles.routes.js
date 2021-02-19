var articlesController = require("../controllers/articles.ctrl.js");
var express = require("express");
var router = express.Router();

/* Middleware that wil handle all articles routes*/
router.use(function (req, res, next) {
  /* Log a message */
  console.log("Tinkering with articles");
  /* Make sure we go to the next routes and don't stop here */
  next();
});

// router.use(authenticator.ensureAuthenticated);
// router.use(authorizer.authorize);

router.get("/", articlesController.index);

router.post("/", articlesController.create);

router.get("/:article_id", articlesController.show);

router.put("/:article_id", articlesController.update);

router.get("/search/:search", articlesController.search);

router.put("/comment/:article_id", articlesController.addComment);

router.get("/like/:article_id", articlesController.addLike);

// router.delete("/:article_id", articlesController.destroy);

module.exports = router;
