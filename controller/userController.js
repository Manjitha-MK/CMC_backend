import User from "../models/User.js";
import bcrypt from "bcrypt"; //hashing
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

//create user
export function createUser(req, res) {
  //---------hashing--------//
  const newUserData = req.body;

  if (newUserData.type == "admin") {
    if (req.user == null) {
      res.json({
        message: "Please login as administrator to create admin accounts",
      });
      return;
    }

    if (req.user.type != "admin") {
      res.json({
        message: "Please login as administratoruuuuuuuuuu to create accounts",
      });
      return;
    }
  }

  newUserData.password = bcrypt.hashSync(newUserData.password, 10);
  //----------------------//

  const user = new User(newUserData);

  user
    .save()
    .then(() => {
      res.json({
        message: "User Created",
      });
    })
    .catch(() => {
      res.json({
        message: "User not created",
      });
    });
}

export function loginUser(req, res) {
  User.find({ email: req.body.email }).then((users) => {
    if (users.length == 0) {
      res.json({
        message: "user not found",
      });
    } else {
      const user = users[0];

      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (isPasswordCorrect) {
        const token = jwt.sign(
          {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            isBlocked: user.isBlocked,
            type: user.type,
            profilePicture: user.profilePicture,
          },
          process.env.SECRET
        );

        res.json({
          message: "User Loged in",
          token: token,
          user : {
            firstName : firstName,
            lastName : lastName,
            type : type,
            profilePicture : profilePicture,
            email : email
          }
        });
      } else {
        res.json({
          message: "Wrong Password",
        });
      }
    }
  });
}

export function isAdmin(req) {
  if (req.user == null) {
    return false;
  }
  if (req.user.type != "admin") {
    return false;
  }

  return true;
}

export function isCustomer(req){
  if (req.user == null) {
    return false;
  }
  if (req.user.type != "customer") {
    return false;
  }

  return true;
}

//manjitha@example.com - securePassword123 - admin
//manjitha@example.com - securePassword123 - customer