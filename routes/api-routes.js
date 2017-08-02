// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================

module.exports = function(app){
	//GET route getting all languages
	app.get("/api/questions", function(req, res) {
    var query = {};
    if (req.query.languageSelect) {
      query.languageSelect = req.query.languageSelect;
    }
    db.Post.findAll({
      where: query
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
}