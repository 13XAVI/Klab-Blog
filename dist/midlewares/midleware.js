"use strict";

require("dotenv").config();
var jwt = require("jsonwebtoken");

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
var middleware = function middleware(req, res, next) {
  try {
    var authHeader = req.headers.token;
    var token = authHeader.split(' ')[1];
    var decode = jwt.verify(token, "".concat(process.env.JWT_SECRET));
    console.log(decode);
    req.userData = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Auth failed "
    });
  }
};
module.exports = middleware;