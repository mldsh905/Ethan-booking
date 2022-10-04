import express from "express";
import * as hotel from "../controllers/hotel.js";
import {verifyAdmin, verifyToken, verifyUser} from "../utils/verifyToken.js";

const route = express.Router();

//add new hotel
route.post('/',verifyToken, hotel.addNewHotel)

//update hotel
route.put('/:id', verifyAdmin, hotel.updateHotel)

//delete hotel
route.delete('/:id', verifyAdmin, hotel.deleteHotel)

//get one hotel by id
route.get('/:id', hotel.getOneHotel)

//get all hotels
route.get('/', hotel.getAllHotels)
route.get('/find/countByType', hotel.countByType)
route.get('/find/findByParam', hotel.findByParams)

export default route
