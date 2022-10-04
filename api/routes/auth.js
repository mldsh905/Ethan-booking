import express from "express";
import {signUp, login, cookieExpire} from "../controllers/auth.js";
const route = express.Router();

route.post('/register',signUp)
route.post('/login',login)
route.get('/logout',cookieExpire)

export default route;