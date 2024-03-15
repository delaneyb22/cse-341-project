require('dotenv').config();
const express = require('express');
const bodyParser = require( 'body-parser' );
//const mongodb= require('./data/database');
const mongodb= require('./data/database').init(process.env.MONGODB_URL);
const app = express();

const port = process.env.PORT  || 3001;

app.use('/', require('./routes'));
app.use(bodyParser.json());

mongodb.initDb((err)=> {
    if(err) {
        console.log(err);
    }
    else{
        app.listen(port, () => {console.log(`Database is listening and node is running on ${port}`)})
    }
})

//app.listen(port, () => {console.log(`Server is running on ${port}`)})