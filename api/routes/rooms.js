import express from "express";
const route = express.Router();

route.get('/',(req, res)=>{
    res.json('this is rooms')
})

export default route