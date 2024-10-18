const express= require("express");
const router = require("./routes/user");
const blogroute = require("./routes/blog");
const croute = require("./routes/comments");

const{auth}=require("./middlewares/auth")
const app= express();
const cookieparser=require("cookie-parser");
app.listen(8000,()=>console.log("Server Started"));


app.set("view engine","ejs");
app.set("views","./views");
app.use(express.static("static"));




app.use(express.urlencoded({extended:false}));
app.use(cookieparser());

app.use("/user",auth,router);
app.use("/",router);
app.use("/user",blogroute);
app.use("/user",croute);


// mongo connection--------
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Blog")
.then(()=>console.log("mongo connected"))
.catch(()=>console.log("mongo error"));



