module.exports = (sequelize, DataTypes) => {
  const Pagamento = sequelize.define('Pagamento', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    tableName: 'pagamentos'
  });

  Pagamento.associate = (models) => {
  Pagamento.hasMany(models.Pedido, {
    foreignKey: 'id_pagamento',
    as: 'pedidos',
  });
};

  return Pagamento;
};