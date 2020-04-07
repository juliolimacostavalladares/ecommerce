const Sequelize = require('sequelize');

const sequelize = new Sequelize('cadastro_de_usuarios', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;