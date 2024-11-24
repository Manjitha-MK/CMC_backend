import express from "express";
import { getStudents, createStudent, deleteStudent } from "../controller/studentController.js";


//create studentRouter
const studentRouter = express.Router();

studentRouter.get("/",getStudents );

studentRouter.post("/", createStudent);

studentRouter.delete("/:name",deleteStudent)

export default studentRouter;

