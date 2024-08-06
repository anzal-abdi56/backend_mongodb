const mongoose = require("mongoose")

const ItemSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        quantity:{
            type:Number,
            required:true,
            default:0
        },
        price: {
            type: Number,
            required:true,
            default: 0
        },
        image:{
            type:String,
            required:true
        },
    },
    {
        timestamps:true
    }
)

const Item = mongoose.model("Item", ItemSchema)
module.exports = Item