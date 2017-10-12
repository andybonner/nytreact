const axios = require("axios");
const router = require("express").Router();
// import controller, which imports model(s)
const articlesController = require("../controllers/articlesController");

router.route("/api/saved")
  .get(articlesController.findAll)
  .post(articlesController.create)


module.exports = router;