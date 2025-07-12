const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
   student:{
        name: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        }
   }
})

module.exports = mongoose.model("Student" , studentSchema);