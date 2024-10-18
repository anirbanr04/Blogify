

const { comments, viewcomments }=require("../controllers/comments");

const express=require("express");
const croute=express.Router();
croute
.route("/:id")
.post(comments)




module.exports=croute;