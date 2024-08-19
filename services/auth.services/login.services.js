const UserModel = require("../../models/User.model");
const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken")

const loginUser = async (email, password) => {
  try {
    // first check if email match or not
    const userExisting = await UserModel.findOne({ email });
    if (!userExisting) {
      const error = new Error("User email don't match. please Sign Up!");
      error.statusCode = 403; //forbidden
      throw error;
    }
   
    // password check
    const passwordCheck = await bcrypt.compare(password,userExisting.password);
    if (!passwordCheck) {
      const error = new Error("Password don't match!");
      error.statusCode = 403; //forbidden
      throw error;
    }
    // token generate
    const authToken = jwt.sign({name:userExisting.name,id:userExisting._id},process.env.JWT_SECRET,{expiresIn:"1m"})
    
    return {user:userExisting,authToken}

  } catch (err) {
    const error = new Error(err.message);
    error.statusCode = 500;
    throw error;
  }
};

module.exports = loginUser;
