const{blog, viewblog}=require("../controllers/blogs");

const express=require("express");
const blogroute= express.Router();
const multer=require("multer");


    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './static/uploads')
        },
        filename: function (req, file, cb) {
          const name = Date.now() + '-' + (file.originalname)
          cb(null,name);
        }
      })

const upload= multer({storage:storage});


blogroute
.route("/content")

.post(upload.single("image"),blog,(req,res)=>{
   
  res.redirect(`/content`)
    
})


    blogroute
    .route("/:id")
    .get(viewblog)
    
    module.exports=blogroute;












