const express = require("express");
const router = express.Router();
const signinController = require("../controllers/loginController");

router.post("/", signinController.handleSignIn);

module.exports = router;
