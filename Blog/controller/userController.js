const User = require("../model/userModel.js");
const { passwordHasher, createToken } = require("../utils/helper.js");
const bcrypt = require("bcrypt");

const registerUser = async (req, res, next) => {
  const { name, email, phone, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists." });
    }

    if (phone) {
      const phoneExists = await User.findOne({ mobile: phone });
      if (phoneExists) {
        return res
          .status(400)
          .json({ message: "Phone number already exists." });
      }
    }

    const hashedPassword = await passwordHasher(password);
    const user = new User({
      name,
      email,
      mobile: phone,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    next(error);
  }
};

 const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }

  const user = await User.findOne({email});
  if(!user){
    return res.status(403).json({
        status: "failed",
        message: "User not found"
    });
  }


  const isMatch = await bcrypt.compare(password, user.password);
  if(!isMatch){
    return res.status(403).json({
        status: "failed",
        message: "Invalid password"
    });
  }

  const token = createToken(user._id, user.email);
  
  res.json({
      status: "successful",
      message: "Welcome",
      token
  });
}

const getUserProfile = async (req, res) => {
  try {
    const { email, id } = req.user;
    const user = await User.findById(id);
    res.status(200).json({
      status:'successful',
      user
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'error',
      message: error.message || "server error"
    })
  }
}

module.exports = {
  registerUser,
  loginUser,
  getUserProfile
};