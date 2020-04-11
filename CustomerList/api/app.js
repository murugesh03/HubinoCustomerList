const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(cors());


mongoose.connect('mongodb+srv://sadam:sadam@123@cluster0-xar18.mongodb.net/Customers',{useNewUrlParser:true,useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', (error) =>{console.log(error)});
db.once('open',()=>{console.log('dbconnected')})

app.use(express.json());

const postUsers = require('./routes/postusers')

app.use('/post', postUsers)


app.listen(3001, ()=>{console.log('server started')});