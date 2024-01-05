const User = require("./UserModel");
const bcrypt = require("bcrypt");

const Login = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const isUser = await User.findOne({ email });

    if ((username !== "", email !== "", password !== "")) {
        if(isUser){
      const passverify = await bcrypt.compare(password, isUser.password);
      if (passverify) {
        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(403).json({ message: "password does not match" });
      }} else{
        res.json({message: "User not found"})
    
      }
    } else {
      res.json({ message: "All credentials required" });
    }
  } catch (error) {
    res.status(500).json({ message: " insternal server error" });
    console.log(error);
  }
};

module.exports = Login;
