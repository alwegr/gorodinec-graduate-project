const mongoose = require("mongoose")

const AuthSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
            enum: ["admin", "employees"],
        }
    }
)
const AuthModal = mongoose.model("authorization", AuthSchema) 
module.exports = AuthModal