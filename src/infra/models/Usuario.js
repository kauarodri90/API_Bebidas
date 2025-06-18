module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_permissao: DataTypes.INTEGER
  }, {
    tableName: 'usuarios'
  });

  Usuario.associate = (models) => {
    Usuario.belongsTo(models.Permissao, {
      foreignKey: 'id_permissao',
      as: 'permissao'
    });

    Usuario.hasMany(models.Pedido, {
      foreignKey: 'id_usuario',
      as: 'pedidos'
    });
  };

  return Usuario;
};
