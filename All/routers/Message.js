const Message=require('../module/Message');
//const mailer = require('nodemailer');
const router = require('./RealEstate');
const middleware = require('../midlewares/midleware');
const { route } = require('./RealEstate');
const mailer = require('./email')

router.post("/createMail",async(req,res,next)=>{
    const message= new Message({
        email:req.body.email,
        message:req.body.message,
        names:req.body.names,
        phone:req.body.phone
    })
    await message.save();
    await mailer.mailer(req.body.email,req.body.message);
    return res.status(200).json({
        message:"Message sent successfully",data:message
    })
})
 
router.get("/AllMail",async(req,res,next)=>{
    const message=await Message.find()
    return res.status(200).json({
        message:"Messages fetched successfully",data:message
    })
})

  

router.get("/Mail/:id",async(req,res,next)=>{
    const message=await Message.findById(req.params.id)
    return res.status(200).json({
        message:"Message fetched successfully",data:message
    })
})
    

router.delete("/deleteMail",async(req,res,next)=>{
    await Message.findByIdAndDelete(req.params.id)
    return res.status(200).json({
        message:"Message deleted successfully"
    })
})
   

router.patch("/updateMail/:id",async(req,res,next)=>{
    const message=await Message.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },{new:true})
    return res.status(200).json({
        message:"Message updated successfully",data:message
    })
})
    
module.exports= router