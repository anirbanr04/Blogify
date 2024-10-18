const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    Body: {
        type: String,
        required: true,
    },
  
    CreatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"blogs",
      
    },
        
    PostedBy:{
          type:String,
    }
},{timestamps:true});

const cmodels= mongoose.model("comments",schema);

module.exports={
    cmodels,
}




