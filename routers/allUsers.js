const express = require("express");
const router = express.Router();

const alluser = require("../controllers/allUsersController");


router.get("/", alluser.allUser);


module.exports = router;