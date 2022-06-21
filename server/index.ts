import mongoose from 'mongoose';

// import dotenv from 'dotenv';
import * as dotenv from "dotenv";

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

// dotenv.config();
dotenv.config({ path: __dirname+'/.env' });

const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI;


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());

const usersRoute = require('./Routes');

app.use('/users', usersRoute);

app.get('/', (req, res) => {
    res.json({ msg: 'Hello everybody'})
});

mongoose.connect(`${URI}`)
.then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
}).catch((err) => {
    console.log(`Connection error: ${err}`);
})