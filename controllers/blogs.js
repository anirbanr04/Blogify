const{bmodel}=require("../models/blog");
const{ cmodels }=require("../models/comments")



const blog= async(req,res)=>{
   
    const{title,desc}=req.body;
    const id=req.user.name;
 
           const user= await bmodel.create({
                Title:title,
                Body:desc,
                PostedBy:id,
                coverimage: `/uploads/${req.file.filename}`,
            
               
            })
  
            let blogs=await bmodel.find({});
            res.render("content",{msg:"Blogs Added",blogs});
      
        }
        
        
        const viewblog=async(req,res)=>{
            const user= await bmodel.findById(req.params.id);
            const coment= await cmodels.find({CreatedBy:req.params.id});

            return res.render("viewblog",{user,coment
               
            })};
        
            module.exports={
                blog,
                viewblog,
            } 
            
        
 
    
    

 
  
   
  
    









  

 
   
    







