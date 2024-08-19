const UserModel = require("../../models/User.model");
const bcrypt = require("bcrypt");

const createUser = async (name, email, password) => {
  try {
    // first check if user exist in database
    const checkUserExisting = await UserModel.findOne({ email });
    if (checkUserExisting) {
      const error = new Error("user already exist");
      error.statusCode = 409; //conflict
      throw error;
    }
    // create the user
    const user = new UserModel({ name, email, password });
    // password hash with bcrypt
    user.password = await bcrypt.hash(password, 10);

    const userResponse = await user.save();
    return userResponse;
    
  } catch (err) {
    const error = new Error(err.message);
    error.statusCode = 500;
    throw error;
  }
};

module.exports = createUser;
