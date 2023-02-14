require('dotenv').config();
var express = require('express');
var Router = express.Router();
var PORT = 7000;
var http = require('http');
var server = http.createServer();
var mongoose = require('mongoose');
var BlogRouter = require('./module/Blog');
var app = express();
// const blog = require('./midlewares/module/routers/Blog')
// const router = require('./midlewares/module/routers/Blog')
var userRoutes = require("../All/routers/user");
// const swaggerDoc = require('./midlewares/module/routers/src/swagga')
var cors = require("cors");
var swaggerDocs = require('./routers/src/swagga');
var RealEstateRouter = require('./routers/RealEstate');
app.use(cors());
app.use(express.json());
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://Tresor:Tresegue@blog-node.jswvzcy.mongodb.net/Blog?retryWrites=true&w=majority').then(console.log("connected to database"))["catch"](function (error) {
  console.log(error);
});
app.listen(PORT, function () {
  console.log("the port is running on ".concat(PORT));
});
swaggerDocs(app);
app.use('/blog', BlogRouter);
app.use("/user", userRoutes);
app.use("/RealEstate", RealEstateRouter);
app.use("/blog", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Header', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'POST,PATCH,GET,DELETE,PUT');
    return res.status(200).json({});
  }
  next();
});