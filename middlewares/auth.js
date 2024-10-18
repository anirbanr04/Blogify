const {getuser}= require("../jwt");


const auth=async(req,res,next)=>{
   
    const uid= req.cookies?.token;
    if(!uid) return res.redirect("/login");
   const user= getuser(uid);
   if(!user) return res.render("login");
   req.user=user;
   next();
};  
   
  
   

    
  

module.exports={auth};