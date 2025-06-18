module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    data: DataTypes.DATE,
    total: DataTypes.FLOAT,
    id_usuario: DataTypes.INTEGER,
    id_pagamento: DataTypes.INTEGER,
    id_status: DataTypes.INTEGER,
    id_endereco: DataTypes.INTEGER
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

    Pedido.belongsTo(models.Pagamento, {
      foreignKey: 'id_pagamento',
      as: 'pagamento'
    });

    Pedido.belongsTo(models.StatusPedido, {
      foreignKey: 'id_status',
      as: 'status'
    });

    Pedido.belongsTo(models.Endereco, {
      foreignKey: 'id_endereco',
      as: 'endereco'
    });
  };

  return Pedido;
};
