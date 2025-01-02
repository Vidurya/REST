const Student = require("../models/Student")

exports.create = async(req, res) => {
    try{
        const student = await Student.create(req.body);
        res.status(201).json(student);
    }catch(exception){
        res.status(400).json({ error : exception.message });
    }
}

exports.findAllStudentsInSchool = async(req, res) => {
    try{
        console.log(req.params)
        const students = await Student.findAll({
            where : { school_id : req.params.schoolId }
        })
        if (!students) return "No students found!"
        res.status(201).json(students);
    }catch(error){
        res.status(400).json({ error: error.message });
    }
}

exports.findAllStudentsInAClass = async(req, res) => {
    try{
        const students = await Student.findAll({
            where: {
                school_id : req.params.schoolId,
                class_id : req.params.classId
            }
        })
        if (!students) return "No Students found!"
        res.status(201).json({students})
    }catch(exception){
        res.status(400).json({ error: exception.message })
    }
}

exports.findStudentByRollNumber = async(req, res) => {
    try{
        const student = await Student.findOne({
            where:{
                school_id: req.params.schoolId,
                class_id: req.params.classId,
                roll_no : req.params.rollNo
            }
        })
        res.status(201).json(student)
    }catch(exception){
        res.status(400).json({ error: exception.message })
    }
}