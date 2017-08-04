// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================

module.exports = function(app){
  //GET route getting all users
  app.get("/users", function(req, res) {
    const {uid} = req.body;

     db.User.findAll({
      where: {
        uid: uid
      }
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
    var query = {};
  });

  app.post("/users", function(req, res) {
     
   });

  app.post("/questions", function (req, res){
    // update
    db.User.update({
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


