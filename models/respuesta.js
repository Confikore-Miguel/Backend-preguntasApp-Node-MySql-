'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Respuesta extends Model {
    static associate(models) {
      Respuesta.belongsTo(models.Pregunta,{as:'pregunta',foreignKey:'pregunta_id'});
    }
  };
  Respuesta.init({
    contenido: DataTypes.STRING,
    correcta: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Respuesta',
    underscored:true,
    timestamps:false
  });
  return Respuesta;
};