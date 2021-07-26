'use strict';
const {Model} = require('sequelize');
const Pregunta = require('./pregunta');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.hasMany(models.Pregunta, {as:'preguntas'});
      Usuario.hasMany(models.Voto, {as:'votos',foreignKey:'usuario_id'});
      Usuario.belongsTo(models.Rol,{as:'rol',foreignKey:'rol_id'});
      Usuario.hasOne(models.Categoria,{as:'usuario_creador',foreignKey:'usuario_id'});
    }
  };
  Usuario.init({
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    estado:DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Usuario',
    timestamps:false,
    underscored:true
  });
  return Usuario;
};