'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pregunta extends Model {
    static associate(models) {
      Pregunta.belongsTo(models.Usuario,{as:'usuario',foreignKey:'usuario_id'});
      Pregunta.hasMany(models.Respuesta,{as:'respuestas',foreignKey:'pregunta_id'})
      Pregunta.belongsTo(models.Categoria,{as:'categoria',foreignKey:'categoria_id'})
    }
  };
  Pregunta.init({
    contenido: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pregunta',
    timestamps:false,
    underscored:true
  });
  return Pregunta;
};