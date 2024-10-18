const express= require("express");
const{model}=require("../models/user");
const{ setuser }=require("../jwt");
const { render } = require("ejs");

const home=async(req,res)=>{
   
 return res.render("index");


}

const signup=async(req,res)=>{
    return res.render("signup.ejs");
}
const postsignup=async(req,res)=>{
  
    const{name,email,password}=req.body;
     await model.create({
       Name:name,
        Email:email,
        Password:password,
    })
    return res.render("login");
}
const login=async(req,res)=>{
    return res.render("login.ejs");
}

const postlogin=async(req,res)=>{
    const{email,password}=req.body;
 const user= await model.findOne({Email:email,Password:password});
  if(!user) return res.render("login",{error:"Email/Password not matched"});
// store token in cookie--
const token=setuser(user);
res.cookie("token",token);

let em=user.Name;
  let text =`logged in by ${em} `;
  return res.render("index",{text,em});

}






  

const logout=(req,res)=>{
    res.clearCookie("token")
    .render("index",{message:"logged out"})

}
  
const blogs=async(req,res)=>{
 return res.render("blogs");

}


module.exports={
    home,
    signup,
    postsignup,
    login,
    postlogin,
    logout,
    blogs,
    
  
}
