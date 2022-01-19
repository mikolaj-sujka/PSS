const express = require("express");

const UserController = require("../controllers/user");

const router = express.Router();

router.post("/register", UserController.createUser);

router.post("/login", UserController.userLogin);

router.get("/find/:name-:city-:discipline", UserController.findUser)
router.get("/:id",  UserController.getUser)
router.post("/:id",  UserController.updateUser)


module.exports = router;
