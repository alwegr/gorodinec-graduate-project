const mongoose = require('mongoose');

const EmployeeStatusSchema = new mongoose.Schema(
    {
        title: String,
    }
)

const EmployeeStatusModal = mongoose.model("EmployeeStatus", EmployeeStatusSchema)
module.exports = EmployeeStatusModal
