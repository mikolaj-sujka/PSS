const express = require("express");

const TeamController = require("../controllers/team");

const router = express.Router();

router.post("/create", TeamController.createTeam)
router.get("/find/:name-:city-:discipline", TeamController.findTeam)
router.get("/:id", TeamController.getTeam)

module.exports = router;
