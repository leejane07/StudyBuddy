// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================

module.exports = function(app) {
    //GET route getting all users
    app.post("/users", function(req, res, err) {
        console.log("hit users post route")
        console.log(req.body);

        db.User.findAll({
            where: {
                uid: req.body.uid
            }
        }).then(
        // Create the user
            db.User.create({
              username: req.body.username,
              uid: req.body.uid,
              email: req.body.email
            }).catch(err => {
              console.log({ err: err }, 'Unexpected Error')
              throw err // Make sure cb gets the error
            })
            );
    });

    // function(user) {
    //         // Check if user is in the DB
    //         // if (user) {
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
    //         // }
    //     }

    // app.post('/users', function (req, res) {
    //   connection.query('INSERT INTO users SET ?', req.body, 
    //       function (err, result) {
    //           if (err) throw err;
    //           res.send('User added to database with ID: ' + result.insertId);
    //       }
    //   );
    // });


    app.get("/users", function(req, res) {

    });

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