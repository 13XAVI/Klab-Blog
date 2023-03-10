const Blog = require('../module/Blog')
const express = require('express');
const router = express.Router();
const multer = require('multer');
const middleware = require('../midlewares/midleware');
const cloudinary = require('cloudinary');
require('dotenv').config();
const coments = require('../module/coments')



const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        cb(null, file.originalname);
    }
})
const fileFilter = (req,file,cb)=>{
    if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/png'){
        cb(null,true)
    }
    else{
        cb(null,false)
    }
    
    
}

const upload = multer({storage : storage , limits :{fileSize : 1024*1024*5}
})

//cloudinary configuration

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key:process.env.api_key,
    api_secret: process.env.api_secret
})


router.post("/createBlog",middleware,upload.single('UploadImages'),async(req,res,next)=>{
    
    try {
        const result =  await cloudinary.uploader.upload(req.file.path);
        
        // console.log("sdfghjkl");
        const blog = await  Blog.create({
            title: req.body.title,
            body : req.body.body,
            Author:req.body.Author,
            img : result.secure_url

        });
        return res.status(201).json({blog})
  
    } catch (error) {
        console.log(error);
        res.status(404).json(error)
    }
    
})
router.get("/all",async(req,res)=>{
    try {
        const blog= await Blog.find();
        res.status(200).json(blog)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.patch("/update/:edit_id",middleware,upload.single('UploadImages'),async(req,res)=>{
    
    try {
        const post =await Blog.findById(req.params.edit_id)
         console.log(post.img)
       const upl = await cloudinary.uploader.destroy(post.img)
       //console.log(upl)
        const result =  await cloudinary.uploader.upload(req.file.path)
        const blog= await Blog.findByIdAndUpdate(req.params.edit_id,{$set:req.body},{new : true});
        res.status(200).json({blog})

    } catch (error) {
        res.status(404).json(error)
    }
})
router.delete("/delete/:edit_id",middleware,async(req,res)=>{
    
    console.log("Sucessful deleted")
    try {
        const {edit_id} = req.params;
        const blog= await Blog.deleteOne({
                _id:edit_id
            }).exec().then((result)=>{
                res.status(200).json(result)
            }).catch((error)=>{
                throw error
            });
         

    } catch (error) {
        res.status(500).json(error)
    }
})

router.get(("/:req_id"),async(req,res,next)=>
{
    const req_id = req.params.req_id
    const blog = await Blog.findById({
        _id: req_id 
    })
    .exec()
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((error)=>{
        console.log(error)
        res.status(500).json(error)
    })
}
)

router.post("/likes/:id",middleware,async(req,res,next)=>{
    try {
        const post= await Blog.findOne({_id:req.params.id})
        if(!post){
            res.status(200).json('post has been')
        }
        await Blog.updateOne({_id :post._id},{
            likes : post.likes + 1
            
        })
        if (post.likes +1){
            res.status(200).json('post has already updated')  
        }
        res.status(200).json('Like added')  
    } catch (error) {
//console.log(error)
       res.status(500).send() 
    }
    
    
   
})
router.post("/unlikes/:id",middleware,async(req,res,next)=>{
    try {
        const post= await Blog.findOne({_id:req.params.id})
        if(!post){
            res.status(200).json('post has not found')
        }
        await Blog.updateOne({_id :post._id},{
            likes : post.likes - 1
        })
        res.status(200).json('post has been updated')  
    } catch (error) {
       res.status(500).send() 
    }
    
    
   
})


router.post('/CreateComment/:id',middleware,async(req,res,next)=>{
const blog = await Blog.findById(req.params.id);
if (!blog){
    return res.status(400).json({message:error})
}
const  comment = new coments({
    comment : req.body.comment,
    blog : req.params.id,
    userId:req.body._id
    })
  try {
    await comment.save();
    blog.comment.push(comment)
    return res.status(200).json({blog, comment})
  } catch (err) {
   return  res.status(404).json(err)
  }

})

router.get("/GetComment/:id",async(req,res)=>{
    try{
        const comnt=await coments.findOne();
        res.send(comnt)
    }catch(error){
    
    res.status(404).json(error)
    }
})
router.delete('/DeleteComment/:id',middleware,async (req,res,next)=>{
    await coments.findByIdAndDelete(req.params.commentId);
    res.status(200).json({message:'Deleted successfully'})
})


module.exports=router
