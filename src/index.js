//require('dotenv').config({path:'./env'})
import express from "express";
import connectDB from "./db/connection.js";
import dotenv from "dotenv";
const port = process.env.PORT || 8000;
const app = express();
dotenv.config({
    path: './env'
})


console.log("hello");
connectDB()
; (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
            app.on("error", (error) => {
                console.log("ERR: ", error);
                throw error
            });
            app.listen(PORT, () => {
                console.log(`App is listening on port ${port}`);
            });
    
        } catch (error) {
            console.log("ERROR", error);
        }
    })()