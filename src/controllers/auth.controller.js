import User from '../models/user.model.js';
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js'
import jwt from 'jsonwebtoken';
import {TOKEN_SECRET } from '../config.js';
export const register = async (req, res) => {
    const { document, name, cell, city, address, email, password } = req.body;
    console.log(document)

    try {
        const userFound = await User.findOne({ email })
        if (userFound) return res.status(400).json(["el correo ya existe"])
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
            document,
            name,
            cell,
            city,
            address,
            email,
            passwordHash
        });

        try {
            const userSaved = await newUser.save();
            const token = await createAccessToken({ id: userSaved._id });

            res.cookie("token", token);
            res.json({
                id: userSaved.id,
                username: userSaved.name,
                email: userSaved.email
            });
        } catch (saveError) {
            console.error("Error saving user:", saveError);
            res.status(500).json({ message: "Error saving user" });
        }
    } catch (err) {
        console.error("Error hashing password:", err);
        res.status(500).json({ message: err.message });
    }
};
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userFound = await User.findOne({ email });
        if (!userFound) return res.status(400).json(["email no encontrados"]);

        const isMatch = await bcrypt.compare(password, userFound.passwordHash);//encriptammos contraseña
        if (!isMatch) return res.status(400).json(["Contraseña incorrecta"]);


        const token = await createAccessToken({
            id: userFound._id, admin: userFound.isAdmin
        });

        res.cookie("token", token);
        res.json({
            iid: userFound._id,
            username: userFound.name,
            email: userFound.email,
            cell: userFound.cell,
            city: userFound.city,
            address: userFound.address,
            document: userFound.document,
            isAdmin: userFound.isAdmin,
            
            
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0),
        httpOnly: true
    });
    res.sendStatus(200);
}
export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id);
    if (!userFound) return res.status(400).json({ message: "user not found" });
    return res.json({
        id: userFound.id,
        username: userFound.name,
        email: userFound.email,
        cell: userFound.cell

    });
    res.send("Profile");
};
export const profileAdmin = async (req, res) => {
    const userFound = await User.findById(req.user.id);
    if (!userFound) return res.status(400).json({ message: "user not found" });
    return res.json({
        id: userFound.id,
        username: userFound.name,
        email: userFound.email

    });
    res.send("Profile");
};

export const verifyToken = async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.send(false);

    jwt.verify(token, TOKEN_SECRET, async (error, user) => {
        if (error) return res.sendStatus(401);

        const userFound = await User.findById(user.id);
        if (!userFound) return res.sendStatus(401);

        return res.json({
            id: userFound._id,
            username: userFound.name,
            email: userFound.email,
            cell: userFound.cell,
            city: userFound.city,
            address: userFound.address,
            document: userFound.document
        });
    });
};
