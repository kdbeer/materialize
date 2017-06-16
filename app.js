const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const config = require('./config/database');
const users = require('./routes/users');
const app = express();
const port = 3000;

mongoose.connect(config.database);
mongoose.connection.on('connected', ()=> {
    console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', ()=> {
  console.log('Connect to database fail');
} );
app.use('/users', users);



//Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  app.send('Invalid Endpoint');
} );

app.listen(port, () => {
  console.log("Server start at " + port);
});
