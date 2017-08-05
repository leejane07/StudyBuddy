// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************


// Dependencies
// =============================================================
var db = require("../models"); 

// Routes
// =============================================================

module.exports = function(app) {
    // Get requests
    // GET route: "/api/users": display a JSON of all possible users
    app.get('/api/users', function(req,res){
      db.User.findAll({
        data: user.uid
      }).then(function(results){
        res.json(results);
        console.log(results);
      });
    });


    // Post requests
    // POST "/api/users" handles incoming survey results
    app.post("/users", function(req, res, err) {

        console.log("hit users post route")
        console.log("this is" + req.body);

        db.User.findAll({
            where: {
              uid: req.body.uid
            }
        }).then(
        // Create the user
        db.User.create({
          displayName: req.body.username,
          uid: req.body.uid,
          email: req.body.email
        }).catch(err => {
          console.log({ err: err }, 'Unexpected Error')
          throw err // Make sure cb gets the error
        })
        // // Check if user is in the DB
        // if (user) {
        //   let userCheck = user.toString()
        //     // If user exists console.log the user object
        //     if (userCheck != "[]") {
        //       console.log("user exists in db")
        //       console.log(user)
        //     } else {
        //       console.log("user does not exists in db")
              
        //     }
        //  }
        )
    });

    // function checkUser(user) {
    //         // Check if user is in the DB
    //         if (user) {
    //           let personCheck = user.toString()
    //             // If user exists console.log the user object
    //             if (personCheck != "[]") {
    //               console.log("user exists in db")
    //               console.log(user)
    //             } else {
    //               console.log("user does not exists in db")
    //               // Create the user
    //               db.User.create({
    //                 username: req.body.username,
    //                 id: req.body.uid
    //               }).then(res.json)
    //             }
    //          }
        

    
    app.post("/questions", function(req, res) {
        // update
        db.User.update({
                language: req.body.language,
                rating: req.body.rating
            })
            .then(function(dbPost) {
                res.json(dbPost);
            })
        res.json(req.body);
        // 1. Validate
        // 2. Save via .create
    })
}