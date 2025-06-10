module.exports = (sequelize, DataTypes) => {
  const Endereco = sequelize.define('Endereco', {
    id_usuario: DataTypes.INTEGER,
    rua: DataTypes.STRING,
    numero: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    cep: DataTypes.STRING,
    complemento: DataTypes.STRING,
  }, {
    tableName: 'enderecos'
  });

  Endereco.associate = (models) => {
    Endereco.belongsTo(models.Usuario, {
      foreignKey: 'id_usuario',
      as: 'usuario'
    });
  };

  return Endereco;
};
