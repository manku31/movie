// Rendering the Profile page
module.exports.profile = async function (req, res) {
    try {
      return res.render("profile", {
        title: "Profile",
      });
    } catch (error) {
      console.log("Error in showing Store Details in Profile Page ==> ", err); 
      return res.redirect("back");
    }
  };
  