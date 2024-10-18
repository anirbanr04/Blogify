const{cmodels}=require("../models/comments");
const{bmodel}=require("../models/blog");


const comments=async(req,res)=>{
    const{body}=req.body;
   
  let comm= await cmodels.create({
        Body:body,
        PostedBy:req.user.name,
        CreatedBy:req.params.id,
    })
    const coment= await cmodels.find({CreatedBy:req.params.id});

    return res.render("comments.ejs",{coment,
        user:req.user
    })

}

   
    





module.exports={
    comments,
  
    
}

