module.exports = (sequelize, DataTypes) => {
  const Adicional = sequelize.define('Adicional', {
    nome: DataTypes.STRING,
    preco: DataTypes.FLOAT,
  }, {
    tableName: 'adicionais'
  });

  Adicional.associate = () => {};

  return Adicional;
};