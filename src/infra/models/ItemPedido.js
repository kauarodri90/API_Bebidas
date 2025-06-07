module.exports = (sequelize, DataTypes) => {
  const ItemPedido = sequelize.define('ItemPedido', {
    quantidade: DataTypes.INTEGER,
    preco_unitario: DataTypes.FLOAT,
    id_pedido: DataTypes.INTEGER,
    id_produto: DataTypes.INTEGER,
  }, {
    tableName: 'itens_pedido'
  });

  ItemPedido.associate = (models) => {
    ItemPedido.belongsTo(models.Pedido, {
      foreignKey: 'id_pedido',
      as: 'pedido'
    });

    ItemPedido.belongsTo(models.Produto, {
      foreignKey: 'id_produto',
      as: 'produto'
    });
  };

  return ItemPedido;
};