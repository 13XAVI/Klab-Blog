require("dotenv").config();
const jwt = require("jsonwebtoken")

// const verifyTokenAndRole = (req,res,next) =>{
//     verifyToken(req,res,() =>{
//         if(req.user.role === 'admin'){
//             next();
//         }
//         else{
//         res.status(400).json(error)
//         }
//     })
//}
const middleware = (req,res,next)=>{
    try {
        const authHeader = req.headers.token;
      
        const token = authHeader.split(' ')[1]
      
        const decode = jwt.verify(token,`${process.env.JWT_SECRET}`)
        console.log(decode);
        req.userData = decode
        next();
    } catch (error) {
        console.log(error);
       res.status(401).json({
        message : "Auth failed "
       }) 
    }
    
}




module.exports = middleware