// en este modelo definimos que datos puede guardar la base de datos mongo al igual que darle 
//validaciones
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true

    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    }
},{
    timestamps: true
});

export default mongoose.model('User', userSchema); //interactuar con los metodos