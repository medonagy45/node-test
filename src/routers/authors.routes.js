var authorsController = require("../controllers/authors.ctrl.js");
var express = require("express");
var router = express.Router();

/* Middleware that wil handle all authors routes*/
router.use(function (req, res, next) {
  /* Log a message */
  console.log("Tinkering with authors");
  /* Make sure we go to the next routes and don't stop here */
  next();
});

// router.use(authenticator.ensureAuthenticated);
// router.use(authorizer.authorize);

router.get("/", authorsController.index);

router.post("/", authorsController.create);

router.get("/:author_id", authorsController.show);

// router.put("/:author_id", authorsController.update);

// router.delete("/:author_id", authorsController.destroy);

module.exports = router;
