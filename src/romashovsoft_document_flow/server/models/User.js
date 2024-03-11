import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            uniqui: true,
        },
        password:{
            type: String,
            required: true,
        },
        doduments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Documents',
            },
        ],
    },
    {timestamps: true},
)

export default mongoose.model('User', UserSchema)