const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Categoria = require('./Categoria');

const Produto = sequelize.define('Produto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  foto: DataTypes.STRING,
  volume: DataTypes.DOUBLE,
  valor: DataTypes.DOUBLE
}, {
  tableName: 'produtos',
  timestamps: false
});

Produto.belongsTo(Categoria, {
  foreignKey: 'id_categoria',
  as: 'categoria'
});

module.exports = Produto;
