import express from "express"
import { createUser, getAllUsers, googleLogin, loginUser } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/",createUser)
userRouter.post("/login",loginUser)
userRouter.post("/google",googleLogin)
userRouter.get("/",getAllUsers)

export default userRouter;