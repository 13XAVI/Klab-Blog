require('dotenv').config()
const express = require('express')
const Router = express.Router()
const PORT = 7000
const http = require('http')
const server = http.createServer()
const mongoose = require('mongoose')
const BlogRouter = require('./module/Blog')
const app = express();
// const blog = require('./midlewares/module/routers/Blog')
// const router = require('./midlewares/module/routers/Blog')
const userRoutes = require("../All/routers/user")
// const swaggerDoc = require('./midlewares/module/routers/src/swagga')
const cors = require("cors")
const swaggerDocs = require('./routers/src/swagga')
const RealEstateRouter = require('./routers/RealEstate')


app.use(cors())
app.use(express.json())


mongoose.set('strictQuery',true);
mongoose.connect('mongodb+srv://Tresor:Tresegue@blog-node.jswvzcy.mongodb.net/Blog?retryWrites=true&w=majority')
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
app.use(("/RealEstate"),RealEstateRouter)


app.use(("/blog"),(req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Header','Origin,X-Requested-With,Content-Type,Accept,Authorization')
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','POST,PATCH,GET,DELETE,PUT')   
    return res.status(200).json({})
    }
    next();
})
