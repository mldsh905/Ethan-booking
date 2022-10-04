import express from 'express';
import cors from 'cors';
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
import cookieParser from 'cookie-parser';

//connect to mongodb
mongoose.connect(process.env.mongo,{dbName:'test'}, () => {
    console.log('mongodb connected');
})


//use middlewares
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true,
    optionSuccessStatus:200
}));
app.use(cookieParser());
app.use(express.json());


//home page
app.get('/', (req, res) => {
    res.json('test');
})
app.use('/auth', authRoute);
app.use('/users', usersRoute);
app.use('/hotels', hotelsRoute);
app.use('/rooms', roomsRoute);




//monitor port
app.listen('8800', () => {
    console.log('backend starts!!');
})