const mongoose = require('mongoose')

const likeSchema = new moongose.Schema({
   userId:{
    type: mongoose.Types.ObjectId,
    ref : "User"
   }, 
blog:{
    type: mongoose.Schema.Types.ObjectId, ref : "Blog"
} 
})
module.exports = mongoose.model('likes',likeSchema)
