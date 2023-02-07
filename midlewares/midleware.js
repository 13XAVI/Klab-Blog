require("dotenv").config();
const jwt = require("jsonwebtoken")
const middleware = (req,res,next)=>{
    try {
        const authHeader = req.headers.token;
        console.log(authHeader);
        const token = authHeader.split(' ')[1]
        console.log(token);
        const decode = jwt.verify(token,`${process.env.JWT_SECRET}`)
        console.log(decode);
        req.userData = decode
        next()
    } catch (error) {
        console.log(error);
       res.status(401).json({
        message : "Auth failed "
       }) 
    }
    
}

module.exports = middleware