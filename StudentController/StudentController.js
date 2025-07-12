const StudentModel = require('../StudentModel/StudentModel');

// Get all students (including name and password)
exports.getStudent = async (req, res) => {
    try {
        const students = await StudentModel.find(); // Returns full student object
        res.status(200).send(students); // You can filter if needed
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

// Save student
exports.saveStudent = async (req, res) => {
    try {
        const { student } = req.body; // Expecting { student: { name, password } }
        const newStudent = await StudentModel.create({ student });
        res.status(201).send(newStudent); // Sends complete student object with _id
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

// Update student
exports.updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { student } = req.body;
        const updatedStudent = await StudentModel.findByIdAndUpdate(
            id,
            { student },
            { new: true, runValidators: true }
        );
        if (!updatedStudent) {
            return res.status(404).send({ message: 'Student not found' });
        }
        res.status(200).send(updatedStudent);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

// Delete student
exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStudent = await StudentModel.findByIdAndDelete(id);
        if (!deletedStudent) {
            return res.status(404).send({ message: 'Student not found' });
        }
        res.status(200).send({ message: 'Student deleted successfully' });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};
