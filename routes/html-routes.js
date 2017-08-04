// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
const routes = require("express").Router();
const models = require("../models");
// Set up Get Routes/End points that load pages
// =============================================================
module.exports = function(app){
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // questions route loads questions.html
  app.get("/questions", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/questions.html"));
  });

   // profile route loads questions.html
  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });

  // chat route loads chat.html
  app.get("/chat/index.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/chat/index.html"));
  });

}