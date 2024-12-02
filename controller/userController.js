import User from "../models/User.js";
import bcrypt from 'bcrypt';    //hashing
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config()



//create user
export function createUser(req, res){

    //---------hashing--------//
    const newUserData = req.body

    newUserData.password = bcrypt.hashSync(newUserData.password,10)
    //----------------------//

    const user = new User(newUserData)

    user.save().then(() => {
        res.json({
            message : "User Created"
        })
    }).catch(() => {
        res.json({
            message : "User not created"
        })
    })

}


export function loginUser(req,res){

    User.find({email : req.body.email}).then(
        (users) =>{
            if(users.length == 0){
                res.json({
                    message : "user not found"
                })
            }
            else{
                const user = users[0]

                const isPasswordCorrect = bcrypt.compareSync(req.body.password,user.password)

                if(isPasswordCorrect){
                   const token =  jwt.sign({user} , process.env.SECRET)
                   res.json({
                    message : "User Loged in",
                    token : token
                   })
                }
                else{
                    res.json({
                        message : "Wrong Password"
                    })
                }
            }
        }
    )

}


