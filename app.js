const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const api = require('./routes/api/chat');
const config = require('./config');
const port = process.env.PORT;

let app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan('dev'));
app.set('jwt-secret', config.secret);

app.use('/api',api);

app.listen(port, () => {
    console.log(`Express server is running at ${port}`);
});

mongoose.connect(config.mongodbUri,{useUnifiedTopology: true, useNewUrlParser:true});
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
    console.log('Connected to mongodb server');
});