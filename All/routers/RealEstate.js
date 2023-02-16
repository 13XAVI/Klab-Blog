

const  express  = require('express');
const router = express.Router()
const cloudinary = require('cloudinary');
const middleware = require('../midlewares/midleware'); 
const multer = require('multer');
const Estate = require('../module/RealEstate');
require('dotenv').config();


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
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})


router.post('/createEstate',upload.array('UploadImages'),async(req,res,next)=>{
    try {
        const files=req.files;
        const url=[];
        // console.log(files);
        for(const file of files){
            const result=await cloudinary.uploader.upload(file.path)
            url.push(result.secure_url)
        }
            const estate= new Estate({
                location:{
                    province:req.body.province,
                    district:req.body.district,
                    street:req.body.street
                },
                image:url,
                price:req.body.price,
                beds:req.body.beds,
                description:req.body.description,
                bath:req.body.bath,
                status:req.body.status,
                LotSize:req.body.lotsize,
                YearBuilt:req.body.year,
            })
            await estate.save();
            return res.status(200).json(estate)
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:error})
    }
}
)


router.patch('/UpdateEstate/:id',upload.array('UploadImages'),async(req,res,next)=>{
    
    try {
        const files=req.files;
        const url=[];
        // console.log(files);
        for(const file of files){
            const result=await cloudinary.uploader.upload(file.path)
            url.push(result.secure_url)
        }
             const estate = await Estate.findOneAndUpdate( req.body._id,{
                location:{
                    province:req.body.province,
                    district:req.body.district,
                    street:req.body.street
                },
                image:url,
                price:req.body.price,
                beds:req.body.beds,
                description:req.body.description,
                bath:req.body.bath,
                status:req.body.status,
                LotSize:req.body.lotsize,
                YearBuilt:req.body.year,
            },{new : true})
            return res.status(200).json(estate)
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:error})
    }
}
)


router.get("/GetRealEstate/:id",middleware,async(req,res)=>{
    try{
        const comnt=await Estate.findOne();
        res.send(comnt)
    }catch(error){
    
    res.status(404).json(error)
    }
})

router.get("/all",middleware, async (req, res, next) => {
    try {
        const estate = await Estate.find();
        res.status(200).json(estate)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.delete('/DeleteRealEstate/:id',middleware,async (req,res,next)=>{
    await Estate.findByIdAndDelete(req.params._id);
    res.status(200).json({message:'Deleted successfully'})
})


module.exports=router