import Hotel from "../models/Hotel.js";

export const addNewHotel = async (req, res) => {
    try {
        const hotel = new Hotel(req.body);
        const savedHotel = await hotel.save();
        res.json(savedHotel)
    } catch (e) {
        res.json(e)
    }
}

export const updateHotel = async (req, res) => {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.json(updateHotel);
    } catch (e) {
        res.json(e)
    }
}

export const deleteHotel = async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.json('hotel is deleted!')
    } catch (e) {
        res.json(e)
    }
}

export const getOneHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.json(hotel)
    } catch (e) {
        res.json(e)
    }
}

export const getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.json(hotels)
    } catch (e) {
        res.json(e)
    }
}

export const countByType = async (req, res) => {
    const type = req.query.type;
    try {
        const list = await Hotel.find({type: type}).count();
        res.json(list)
    } catch (e) {
        res.json(e)
    }
}

export const findByParams = async (req, res) => {
    const {min, max, ...others} = req.query;
    try {
        const list = await Hotel.find({...others, price:{$gte: min ||0, $lte: max || 99999}});
        res.json(list)
    } catch (e) {
        res.json(e)
    }
}