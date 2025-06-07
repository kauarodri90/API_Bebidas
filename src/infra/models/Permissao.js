module.exports = (sequelize, DataTypes) => {
  const Permissao = sequelize.define('Permissao', {
    nome: DataTypes.STRING
  }, {
    tableName: 'permissoes'
  });

  Permissao.associate = (models) => {
    Permissao.hasMany(models.Usuario, {
      foreignKey: 'id_permissao',
      as: 'usuarios'
    });
  };

  return Permissao;
};
