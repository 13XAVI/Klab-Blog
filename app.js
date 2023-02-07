require('dotenv').config()
const express = require('express')
const Router = express.Router()
const PORT = 7000
const http = require('http')
const server = http.createServer()
const mongoose = require('mongoose')
const BlogRouter = require('./routers/Blog')
const app = express();
const blog = require('./routers/Blog')
const router = require('./routers/Blog')
const userRoutes = require("./routers/user")
const swaggerDoc = require('./routers/src/swagga')
const cors = require("cors")
const swaggerDocs = require('./routers/src/swagga')

app.use(express.json())


mongoose.set('strictQuery',true);
mongoose.connect('mongodb://127.0.0.1:27017/BLOG')
.then(console.log("connected to database"))
.catch((error)=>{
    console.log(error)
})
app.listen(PORT,()=>{
    console.log(`the port is running on ${PORT}`)
})
swaggerDocs(app)
app.use(('/blog'),BlogRouter)
app.use(("/user"),userRoutes)


app.use(("/blog"),(req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Header','Origin,X-Requested-With,Content-Type,Accept,Authorization')
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','POST,PATCH,GET,DELETE,PUT')   
    return res.status(200).json({})
    }
    next();
})
