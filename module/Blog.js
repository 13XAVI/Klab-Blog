const mongoose = require('mongoose')
const BlogSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
    unique:true,
  },
    body :{
        type:String,        
    },
    Author:{
        type:String,
    },
    likes:{
        type:Number,
        default:0
    },
    comment:{
        type:String

    },
    img:{
        type:String ,
        description:"the image of the blog post"
    }
},{
    timestamps : true
}
)
module.exports = mongoose.model('Blog',BlogSchema);