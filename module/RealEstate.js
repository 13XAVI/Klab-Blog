const mongoose = require('mongoose')
const RealEstateSchema = new mongoose.Schema({
    Firstname:{
        type:String,
        Requied:true
    }
    ,
    Author:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    email:{
        type: String,
        required : true,
        match:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    },
    password : {
        type:String,
        required:true,
        match :{}
    }
}
)
module.exports = mongoose.model('RealEstate',RealEstateSchema);