const mongoose=require('mongoose');

const EstateSchema=new mongoose.Schema({
    location:{
        province:{
            type:String
        },
        District:{
            type:String
        },
        street:{
            type:String
        }
    },
    price:{
        type:String
    },
    YearBuilt:{
        type:Date,
        default: Date.now
    },
    image:{
        type:Array,
        default:[]
    },
    beds:{
        type:Number
    },
    description:{
        type:String
    },
    bath:{
        type:Number
    },
    status:{
        type:String
    },
    
    LotSize:{
        type:String
    },
    description:{
        type:String
    }
},  {
    timestamps:true
})
module.exports=mongoose.model('estate',EstateSchema);
