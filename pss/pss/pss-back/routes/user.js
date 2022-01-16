const express = require("express");
const cors = require("cors");

const UserController = require("../controllers/user");

const router = express.Router();

router.post("/register", UserController.createUser);

router.post("/login", UserController.userLogin);

router.get("/find/:name-:city-:discipline", cors(), UserController.findUser)
router.get("/:id", cors(), UserController.getUser)
router.patch("/:id", cors(), UserController.updateUser)


module.exports = router;
