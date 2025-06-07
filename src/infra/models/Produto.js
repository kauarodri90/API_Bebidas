module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    nome: DataTypes.STRING,
    preco: DataTypes.FLOAT,
    id_categoria: DataTypes.INTEGER,
  }, {
    tableName: 'produtos'
  });

  Produto.associate = (models) => {
    Produto.belongsTo(models.Categoria, {
      foreignKey: 'id_categoria',
      as: 'categoria'
    });

    Produto.hasMany(models.ItemPedido, {
      foreignKey: 'id_produto',
      as: 'itens'
    });
  };

  return Produto;
};