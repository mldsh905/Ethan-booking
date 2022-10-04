import express from "express";
import * as user from "../controllers/user.js";
import {verifyAdmin, verifyToken, verifyUser} from "../utils/verifyToken.js";

const route = express.Router();

//update user
route.put('/:id', verifyUser, user.updateUser)

//delete user
route.delete('/:id', verifyUser, user.deleteUser)

//get one user by id
route.get('/:id', verifyUser, user.getOneUser)

//get all users
route.get('/', verifyAdmin, user.getAllUser)

export default route