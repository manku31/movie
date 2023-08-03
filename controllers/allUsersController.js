const User = require("../models/Users");

module.exports.allUser = async function (req, res) {
    try {
      const users = await User.find().select("name email");
  
      return res.render("allUsers", {
        title: "Users",
        users,
      });
    } catch (error) {
      console.log("Error in showing all user in Page ==> ", err);
      return res.redirect("back");
    }
  };