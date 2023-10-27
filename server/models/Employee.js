// Purpose: Employee model for the database
const mongoose = require("mongoose");

// Employee Schema
const EmployeeSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

// Employee Model
const EmployeeModel = mongoose.model("employee", EmployeeSchema)
module.exports = EmployeeModel;