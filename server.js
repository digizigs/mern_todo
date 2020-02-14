const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();


//Server setup
const app = express();

//server port
const port = process.env.PORT;

//Server listen
app.listen(port, () => console.log(`server started on port ${port}`));
