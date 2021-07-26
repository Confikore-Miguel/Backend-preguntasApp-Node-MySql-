'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    static associate(models) {
      Rol.hasOne(models.Usuario, {as:'rol',foreignKey:'rol_id'});
    }
  };
  Rol.init({
    nom_rol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rol',
    timestamps:false,
    underscored:true
  });
  return Rol;
};