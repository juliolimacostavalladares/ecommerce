const bodyParser = require("body-parser");
const express = require('express');
const app  = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./controller/authController')(app);


app.listen(3000);