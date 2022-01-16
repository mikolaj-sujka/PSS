const express = require("express");

const TeamController = require("../controllers/team");
const cors = require("cors");

const router = express.Router();


router.post("/create", cors(), TeamController.createTeam)
router.get("/find/:name-:city-:discipline", cors(), TeamController.findTeam)
router.get("/:id", cors(), TeamController.getTeam)

module.exports = router;
