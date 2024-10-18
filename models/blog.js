const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
    },
    Body: {
        type: String,

    },
    CreatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"signups",
      
    },
        
    PostedBy:{
          type:String,

    },

    coverimage: {
        type: String,
    },


},{timestamps:true});

const bmodel= mongoose.model("blogs",schema);

module.exports={
    bmodel,
}