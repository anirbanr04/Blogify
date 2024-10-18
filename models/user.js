const mongoose=require("mongoose");
const schema= new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        unique:true,
    },
    Password:{
        type:String,
       
    }
})

const model= mongoose.model("signup",schema);

module.exports={
    model,
}