const express = require('express');
const router = express.Router();
const studentController = require('../StudentController/StudentController');

router.get('/get', studentController.getStudent);
router.post('/save', studentController.createStudent);
router.put('/update/:id', studentController.updateStudent);
router.delete('/delete/:id', studentController.deleteStudent);

module.exports = router;
