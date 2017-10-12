const axios = require("axios");
const router = require("express").Router();
// import controller, which imports model(s)
const articlesController = require("../controllers/articlesController");

// actions not needing a specific ID:
router.route("/api/saved")
  .get(articlesController.findAll)
  .post(articlesController.create);

// actions needing a specific ID:
router.route("/:id")
  .delete(articlesController.remove);

// All views are handled by React:
// TODO: check, is this ok or does it need router.use?
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

module.exports = router;