const express = require("express");
const router = express.Router();

const alluser = require("../controllers/allUsersController");


router.get("/", alluser.allUser);

// router.get("/", require("../controllers/dataController").movieData);


module.exports = router;