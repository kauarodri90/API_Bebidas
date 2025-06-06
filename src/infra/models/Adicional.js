const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Produto = require('./Produto');

const Adicional = sequelize.define('Adicional', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id_produto: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: DataTypes.STRING,
  foto: DataTypes.STRING,
  quantidade: DataTypes.INTEGER
}, {
  tableName: 'adicionais',
  timestamps: false
});

Adicional.belongsTo(Produto, {
  foreignKey: 'id_produto',
  as: 'produto'
});

module.exports = Adicional;
