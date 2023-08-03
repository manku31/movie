const express = require("express");
const router = express.Router();
const passport = require("passport");
const user = require("../controllers/userController");

router.get("/login", user.login);
router.get("/register", user.register);

router.post("/create", user.create);

// use passport as a middleware to authenticate
router.post(
  "/create-session",
  passport.authenticate(
    "local", // which method use
    { failureRedirect: "/user/login" }
  ),
  user.createSession
);

// logout
router.get("/sign-out", user.destroySession);

router.get("/profile", require("../controllers/profileController").profile);

module.exports = router;
