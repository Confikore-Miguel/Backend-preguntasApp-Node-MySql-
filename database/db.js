const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');
const db = { };

db.connection = new Sequelize( config.development.database, process.env.USER_NAME_DB,process.env.PASSWORD_DB,{
    host: process.env.HOST_DB || 'localhost',
    dialect: process.env.DIALECT || 'mysql'
});

//Vinculamos a nuestros modelos a BD
db.Usuario = require('../models/usuario')(db.connection,DataTypes);
db.Rol = require('../models/rol')(db.connection,DataTypes);
db.Categoria = require('../models/categoria')(db.connection,DataTypes);
db.Pregunta = require('../models/pregunta')(db.connection,DataTypes);
db.Respuesta = require('../models/respuesta')(db.connection,DataTypes);
db.Voto = require('../models/voto')(db.connection,DataTypes);

//Asociar los modelos 
db.Usuario.associate(db.connection.models)
db.Rol.associate(db.connection.models)
db.Categoria.associate(db.connection.models)
db.Pregunta.associate(db.connection.models);
db.Respuesta.associate(db.connection.models);
db.Voto.associate(db.connection.models);

module.exports = db;

