const mongoose = require("mongoose");

//   "mongodb+srv://ps1234:ps1234@cluster0.yfl43v3.mongodb.net/startupz"       // for mongoDB atlas server
mongoose.connect("mongodb://localhost/movie");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to the Database :: MongoDB");
});

module.exports = db;
