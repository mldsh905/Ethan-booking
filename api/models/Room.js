import mongoose from "mongoose";

const {Schema} = mongoose;

const roomSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required:true
    },
    maxPerson: {
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    roomNumbers:[{number: Number, unavailableDates:[{type: Date}]}]
})

export default mongoose.model('Room', roomSchema)