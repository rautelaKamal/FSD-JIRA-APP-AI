const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    taskTitle: string,
    taskDesc: String,
    empName: String
})

module.exports = mongoose.model("Task", TaskSchema);