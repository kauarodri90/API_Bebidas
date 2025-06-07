module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    id_permissao: DataTypes.INTEGER,
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