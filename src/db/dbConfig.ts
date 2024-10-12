

import mongoose from "mongoose";


export async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!);
        const connection = mongoose.connection;
        
        connection.on('connected', () => {
            console.log("Connected to mongodb");
        })

        connection.on('error', (error) => {
            console.log("Connection to mongodb failed. please try again later");
            process.exit();
        })
    } catch (error) {
        console.log("Something went wrong while connecting to MongoDB", error);
    }
}