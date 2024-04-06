const Sequelize = require('sequelize');
const configDb = require('../config/database');

const Cadastro = require('../models/Cadastro');

const connection = new Sequelize(configDb);

Cadastro.init(connection);

module.exports = connection;