import { MongoClient, ServerApiVersion } from 'mongodb';
import mongoose from "mongoose";

import dotenv from 'dotenv';

// Configura la carga de variables de entorno
dotenv.config();
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(">>> DB is connected");
    } catch (error) {
        console.error(error);
    }
};