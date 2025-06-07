module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    data: DataTypes.DATE,
    total: DataTypes.FLOAT,
    id_usuario: DataTypes.INTEGER,
  }, {
    tableName: 'pedidos'
  });

  Pedido.associate = (models) => {
    Pedido.belongsTo(models.Usuario, {
      foreignKey: 'id_usuario',
      as: 'usuario'
    });

    Pedido.hasMany(models.ItemPedido, {
      foreignKey: 'id_pedido',
      as: 'itens'
    });
  };

  return Pedido;
};