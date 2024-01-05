const User = require("./UserModel");
const bcrypt = require("bcrypt");
// const mongoose = require( 'mongoose')

const Register = async (req, res) => {
  try {
    const {username, email, password} = req.body;
    const existingUser = await User.findOne({email});
    // const sameUser = await User.findOne({username})
    if (username !== "" && email !== "" && password !== "") {
      if (!existingUser) {
        const hashedpassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedpassword });
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
      } else{
        res.status(200).json({ message: "User already exists" });
    }} else {
      res.json({ message: "All credentials required" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = Register;
