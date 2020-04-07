const express = require('express');
const {UserTable} = require('../models/users');
const path = require('path')
const Sequelize = require('../database/db');

const routers = express.Router();



routers.get('/register', (req, res)=>{
    res.sendFile(path.resolve('src/views/login.html'));
})

routers.post('/register', async (req, res)=> {

    Sequelize.sync().then(()=>{
       const createTable = UserTable.create(req.body)

        if(req.body == true){
          return  console.log("ok")
        }
     
    });

});

module.exports = app => app.use('/auth', routers);

routers.get('/', (req, res)=>{
    res.sendFile(path.resolve('src/views/index.html'));
})
