import User from "../models/User.js";


export const updateUser = async (req, res)=>{
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.json(updateUser);
    }catch (e) {
        res.json(e)
    }
}

export const deleteUser = async (req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json('user is deleted!')
    }catch (e) {
        res.json(e)
    }
}

export const getOneUser = async (req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        res.json(user)
    }catch (e) {
        res.json(e)
    }
}

export const getAllUser = async (req,res)=>{
    try {
        const users = await User.find();
        res.json(users)
    }catch (e) {
        res.json(e)
    }
}