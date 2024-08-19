const loginUser = require( "../services/auth.services/login.services" );
const createUser = require("../services/auth.services/signup.services");

const signUpUserController = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userData = await createUser(name, email, password);
    return res.status(201).json({
      status: true,
      message: "user created successfully",
      error: null,
      data: userData,
    });
  } catch (error) {
    const errorStatus = error.statusCode || 500;
    const errorMessage = error.message || "Internal server error";

    return res
      .status(errorStatus)
      .json({ status: false, message: errorMessage, error: error.message });
  }
};

const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await loginUser( email, password);

    return res.status(200).json({
      status: true,
      message: "login successful",
      error: null,
      data: { user: userData.user, authToken: userData.authToken },
    });
  } catch (error) {
    const errorStatus = error.statusCode || 500;
    const errorMessage = error.message || "Internal server error";

    return res
      .status(errorStatus)
      .json({ status: false, message: errorMessage, error: error.message });
  }
};

module.exports = { signUpUserController, loginUserController };
