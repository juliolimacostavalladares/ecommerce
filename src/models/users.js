require('events').EventEmitter.prototype._maxListeners = 100;
const sequelize = require('../database/db');
const {DataTypes} = require('sequelize')
const bcrypt = require('bcryptjs')


const UserTable = sequelize.define('user', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        unique: true,
        allowNull:false
    },
    name : {
        type : DataTypes.STRING,
        allowNull:false
    },
    email : {
        type: DataTypes.STRING,
        unique:true,
        allowNull:false,
        unique: true
    },
    password :{
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    createdAt : {
        type: DataTypes.DATE,
        allowNull:false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull:false
    }
    
});



const User = sequelize.model('user',);

User.beforeCreate((user, options) => {

    return bcrypt.hash(user.password, 10)
    .then(hash => {
    user.password = hash;
    })
    .catch(err => {
    throw new Error();
    });
    });

module.exports = {UserTable};