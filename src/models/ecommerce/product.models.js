import mongoose, { mongo } from "mongoose";
import { User } from "./user.models";

const productSchema = new mongoose.Schema({
    description: {
        type: String,
        requried: true
    },
    name: {
        required: true,
        type: String
    },
    productImage: {
        require: true,
        type: String
    },
    price: {
        required: true,
        type: Number,
        required: true
    },
    stock: {
        default: 0,
        type: Number
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

export const Product = mongoose.model("Product", "productSchema");