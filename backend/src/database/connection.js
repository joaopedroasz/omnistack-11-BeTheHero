const knex = require('knex');

const DBConfiguration = require('../../knexfile');

// Criando uma conexão com o banco de dados utilzando as configurações de desenvolvimento:
const connection = knex(DBConfiguration.development);

module.exports = connection;