const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path')
const cors = require('cors')
require('dotenv').config();

const app = express();
const PORT = 5000; 

const questionsRouter = require('./routes/questions.js');
const themesRouter = require('./routes/themes.js')

let PASSWORD = process.env.PASSWORD
const MONGODB_URI = `mongodb+srv://Daru:${PASSWORD}@clustercurated-4syco.azure.mongodb.net/full-stack-server?retryWrites=true&w=majority`
// MONGODB_URI ||
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('tiny'));
app.use('/api/questions', questionsRouter);
app.use('/api/themes', themesRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});