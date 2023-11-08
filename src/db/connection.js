
import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        console.log("connected");
    } catch (error) {
        console.log("MONGODB connection error ", error);
        process.exit(1);
    }
}

export default connectDB;

//##########Another Way of connecting DB(if E function)##########
// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log("ERR: ", error);
//             throw error
//         });
//         app.listen(PORT, () => {
//             console.log(`App is listening on port ${PORT}`);
//         });

//     } catch (error) {
//         console.log("ERROR", error);
//     }
// })()