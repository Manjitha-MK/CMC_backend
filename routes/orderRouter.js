import express from "express"  ;
import { createOrder } from "../controller/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/",createOrder)

export default orderRouter;