'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voto extends Model {

    static associate(models) {
      Voto.belongsTo(models.Usuario,{as:'usuario',foreignKey:'usuario_id'})
      Voto.belongsTo(models.Categoria,{as:'categoria_voto',foreignKey:'categoria_id'})
    }
  };
  Voto.init({
    correctas: DataTypes.STRING,
    incorrectas: DataTypes.STRING,
    tiempo:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Voto',
    timestamps:false,
    underscored:true
  });
  return Voto;
};