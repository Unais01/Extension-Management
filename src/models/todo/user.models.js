import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true

        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true

        },
        password: {
            type: String,
            required: true
        }


    }, { timestamps: true });//Time stamp for creation time and updation time track
export const User = mongoose.model("User", "userSchema");