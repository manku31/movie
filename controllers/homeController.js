const User = require("../models/Users");

// Rendering the home page
module.exports.home = async function (req, res) {
  try {
    return res.render("home", {
      title: "Home",
    });
  } catch (error) {
    console.log("Error in showing Details in Home Page ==> ", err);
    return res.redirect("back");
  }
};


