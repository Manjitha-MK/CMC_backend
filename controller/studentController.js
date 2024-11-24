import Student from "../models/student.js";


export function getStudents(req, res) {
    Student.find()
      .then((studentList) => {
        res.json({
          list: studentList,
        });
      })
      .catch(() => {
        res.json({
          message: "Not found",
        });
      });
  }

export function  createStudent(req, res) {
    console.log("This is a post request for Student Router student created");
  
    const student = new Student(req.body);
    student
      .save()
      .then(() => {
        res.json({
          message: "Student created",
        });
      })
      .catch(() => {
        res.json({
          message: "Student not created",
        });
      });
  }

  export function deleteStudent(req,res){

    const stname = req.params.name

    Student.deleteOne({name : stname}).then(()=>{
      res.json({
        message : "Student deleted"
      })
    }).catch(()=>{
      res.json({
        message : "Student not deleted"
      })
    })

  }