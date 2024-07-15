import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
// import mongoose from 'mongoose';

import Connection from './database/db.js';
import router from './routes/route.js;'

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// const URL = process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@myproject1.ntwmsdk.mongodb.net/?retryWrites=true&w=majority&appName=Myproject1`
const URL = process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@project-blog.nwx2i1m.mongodb.net/?retryWrites=true&w=majority&appName=Project-blog`;

Connection(URL);