import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })
        const savedUser = await user.save();
        res.json(savedUser)
    } catch (e) {
        res.json(e)
    }
}

export const login = async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username});
        if (!user) return res.json('user not find!');
        const isPassword = bcrypt.compareSync(req.body.password, user.password);
        if (!isPassword) return res.json('password incorrect');
        //create token (use 'openssl rand -base64 10'
        const {password, isAdmin, ...others} = user._doc;
        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.jwt);
        res.cookie('access_token', token, {httpOnly: true}).json({...others});
    }catch (e) {
        res.json(e)
    }
}

export const cookieExpire = async (req, res) => {
    try{
        res.cookie('access_token', 'token', {httpOnly: true,maxAge:0}).json('logout');
    }catch (e) {
        res.json(e)
    }
}