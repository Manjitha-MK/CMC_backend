import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productId : {
        type : String,
        required : true,
        unique : true
    },
    productName : {
        type : String,
        required : true
    },
    altNames : [
        {
            type : String
        }
    ],
    images : [
        {
            type : String
        }
    ],
    price : {
        type : Number,
        required : true
    },
    lastPrice : {
        type : Number,
        required : true
    },
    stock : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    }
});
