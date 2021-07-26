'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categoria.hasMany(models.Pregunta,{as:'categoria',foreignKey:'categoria_id'});
      Categoria.hasMany(models.Voto,{as:'categoria_voto',foreignKey:'categoria_id'});
      Categoria.belongsTo(models.Usuario,{as:'usuario_creador',foreignKey:'usuario_id'})
    }
  };
  Categoria.init({
    nom_categoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categoria',
    timestamps:false,
    underscored:true
  });
  return Categoria;
};