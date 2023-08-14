import User from '../models/user.model.js';
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js'
export const register = async (req, res) => {
    const { email, password, username } = req.body;
    try {
        const passwordHash = await bcrypt.hash(password, 10);//encriptammos contraseña
        console.log(passwordHash)
        const newUser = new User({
            username,
            email,
            passwordHash
        });
        const userSaved = await newUser.save();
        const token = await createAccessToken({ id: userSaved._id });
        
        res.cookie("token", token);
        res.json({
            id: userSaved.id,
            username: userSaved.username,
            email: userSaved.email
        });
    } catch (err) {
        console.log(err);
    }
};

export const login = (req, res) => res.send('login');