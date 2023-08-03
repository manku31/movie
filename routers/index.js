const express = require("express");
const router = express.Router();

const home = require("../controllers/homeController")

router.get("/", home.home);

router.use("/all-users", require("./allUsers"));

router.use("/user", require("./user"));

module.exports = router;
