const express= require("express");

const { home, signup, postsignup, login, postlogin, logout, blogs } = require("../controllers/user.js");
const router= express.Router();
router
.route("/")
.get(home)
.post(postlogin)



router
.route("/signup")
.get(signup);

router
.route("/login")
.post(postsignup)
.get(login);

router
.route("/logout")
.get(logout)

router
.route("/user/blogs")
.get(blogs),


module.exports= router;