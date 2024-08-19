const {loginUserController, signUpUserController } = require("../controllers/auth.controller");
const { signUpValidation, loginValidation } = require( "../middlewares/auth.middle" );

const router = require("express").Router();

// ====== routes ====
router.post("/login",loginValidation, loginUserController);
router.post("/register",signUpValidation, signUpUserController);

module.exports = router;
