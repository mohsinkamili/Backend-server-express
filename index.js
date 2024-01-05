const express =require ("express");
const app = express();
const cors = require('cors')
const Login = require("./Controllers/Login")
const FetchData = require("./Controllers/FetchFoodData")
const Register = require("./Controllers/Register")
const mongoose = require("mongoose");
const bodyparser = require('body-parser'); 
require('dotenv').config();
const url = process.env.MONGO_URL;
const port = process.env.PORT || 2000;

app.use(cors());
app.use(bodyparser.json());


if(mongoose.connect(url)){
  console.log(`Database connected to ${url}`)
} 



app.get("/api/recipes" , FetchData);

app.post("/api/login", Login);

app.post("/api/register", Register);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});