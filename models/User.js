import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email :{
        type : String,
        required : true, // you can't save the email with empty
        unique : true  // one email can contain only one document
    },
    firstName :{
        type : String,
        required : true,
    },
    lastName :{
        type : String,
        required : true,
    },
    password :{
        type : String,
        required : true
    },
    isBlocked :{
        type : Boolean,
        default : false,
    },
    type :{
        type : String,
        default : "customer"
    },
    profilePicture :{
        type : String,
        default : "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=-mUWsTSENkugJ3qs5covpaj-bhYpxXY-v9RDpzsw504="

    }
})

const User = mongoose.model("users",userSchema)

export default User