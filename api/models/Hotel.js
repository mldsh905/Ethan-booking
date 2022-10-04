import mongoose from "mongoose";

const {Schema} = mongoose;

const hotelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    photos: {
        type: [String]
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true})

export default mongoose.model('Hotel', hotelSchema)