const express = require('express');
const router = express.Router();
const studentController = require('../controller/student')

router.get('/school/:schoolId/students/', studentController.findAllStudentsInSchool);
router.get('/school/:schoolId/class/:classId/students', studentController.findAllStudentsInAClass);
router.get('/school/:schoolId/class/:classId/student/:rollNo', studentController.findStudentByRollNumber);
router.post('/', studentController.create);

module.exports = router;