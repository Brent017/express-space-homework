// DEPENDENCIES
const express = require('express');
const app = express();

// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show

const marsMissions = require('./models/marsMissions');
// console.log(marsMissions);
// Index route for marsMissions
// app.get('/marsMissions', (req, res) => {
//   res.send(marsMissions);
// })
// SHOW
app.get('/marsMissions/:index', (req, res) => {
  // console.log(req.params, "<--req.params");
  // console.log('/marsMissions/:index');
  res.render('show.ejs', {
    mission: marsMissions[req.params.index]
  })
})

app.get('/marsMissions/', (req, res) => {
  console.log(marsMissions[req.params.index], "<--ejs")
  res.render('index.ejs', {
    missions: marsMissions
  })
})
// * Make it so you can click on a mission’s name on the index page, and be taken to that mission’s show page
// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages

// NOTES:
// ejs has not been installed
// views folder has not been created
// views/missions folder has not been created

// PORT
const port = 3000;

// DATA - put into marsMissions.js file inside of a models folder, for module.exports
// remember to require it in the server

// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission

app.get('/', (req, res) => {
  res.send("Welcome to the launchpad")
})

// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
