// en este modelo definimos que datos puede guardar la base de datos mongo al igual que darle 
//validaciones
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    document:{
        type:String,
        require: true,
        trim: true
    },
    
    name: {
        type: String,
        require: true,
        trim: true

    },
    cell:{
        type:String,
        require:true,
        trim:true
    },
    city:{
        type:String,
        require:true,
        trim:true
    },
    address:{
        type:String,
        require:true,
        trim:true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    passwordHash: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
});

export default mongoose.model('User', userSchema); //interactuar con los metodos