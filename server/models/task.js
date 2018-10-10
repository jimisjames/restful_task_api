
const mongoose = require('mongoose')

var TaskSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 2 },
    description: { type: String, default: "" },
    completed: { type: Boolean, default: false }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'} })

mongoose.model('Task', TaskSchema);