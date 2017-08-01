// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Set up Get Routes/End points that load pages
// =============================================================
module.exports = function(app){
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  // questions route loads cms.html
  app.get("/questions", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });
}