module.exports = (sequelize, DataTypes) => {
  const StatusPedido = sequelize.define('StatusPedido', {
    descricao: DataTypes.STRING,
  }, {
    tableName: 'status_pedido'
  });

  StatusPedido.associate = (models) => {
    StatusPedido.hasMany(models.Pedido, {
      foreignKey: 'id_status',
      as: 'pedidos'
    });
  };

  return StatusPedido;
};
