const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const bodyParser= require('body-parser');

dotenv.config();

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true});
/* main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
} */

app.use(express.json());

app.use("/api/auth",authRoute);

app.listen(3000,() => {
    console.log("backend server is running!");
})