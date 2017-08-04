// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================

module.exports = function(app){
  //GET route getting all users
  app.get("/api/[user]", function(req, res) {
    var query = {};
    if (req.query.languageSelect) {
      query.languageSelect = req.query.languageSelect;
    }
    db.User.findAll({
      where: query
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.post("/users", function(req, res) {
     const {uid} = req.body;

     db.User.find({
      where: // user's uid is equal to ^ that uid
     }).then(function (user) {
       if (user) {
         res.json(user);
       } else {
          // ensure you have a username
        User.create({
          username: req.body.username,
          uid: uid
        }).then(res.json)
       }
     })

  app.post("/questions", function (req, res) {
    // update

    db.User.create({
      username: req.body.username,
      language: req.body.language,
      rating: req.body.rating
    })
    .then(function(dbPost){
      res.json(dbPost);
    })
    res.json(req.body);
    // 1. Validate
    // 2. Save via .create
  })
}

