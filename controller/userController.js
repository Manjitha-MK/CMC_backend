import User from "../models/User.js";
import bcrypt from 'bcrypt';    //hashing
import jwt from 'jsonwebtoken';



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
                   const token =  jwt.sign({user} , "cbc-secret-key-7973")
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






// delete user
export function deleteUser(req, res){

    User.deleteOne({email : req.body.email}).then(() =>{
        res.json({
            message : "Deleted user"
        })
    }).catch(() =>{
        res.json({
            message : "User not deleted"
        })
    })

}
