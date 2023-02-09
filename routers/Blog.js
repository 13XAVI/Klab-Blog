const Blog = require('../module/Blog')
const express = require('express');
const  Router  = require('express');
const router = express.Router()
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const multer = require('multer');
const middleware = require('../midlewares/midleware');
const cloudinary = require('cloudinary');
const { dotenv } = require('dotenv');
const { findById } = require('../module/Blog');



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
        
        const blog=await  Blog.create({
            title: req.body.title,
            body : req.body.body,
            Author:req.body.Author,
            img : result.secure_url

        });
       
        res.status(201).json({blog})
  
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
        // console.log(post.img)
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
    
    try {
        const {edit_id} = req.params;
        const blog= await Blog.deleteOne({
                _id:edit_id
            }).exec().then((result)=>{
                console.log("Sucessful deleted")
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

router.post("/likes/:id",async(req,res,next)=>{
    try {
        const post= await Blog.findOne({_id:req.params.id})
        if(!post){
            res.status(200).json('post has not found')
        }
        await Blog.updateOne({_id :post._id},{
            likes : post.likes + 1
        })
        res.status(200).json('post has been updated')  
    } catch (error) {
       res.status(500).send() 
    }
    
    
   
})
router.post("/unlikes/:id",async(req,res,next)=>{
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



module.exports=router

