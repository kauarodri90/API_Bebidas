module.exports = (sequelize, DataTypes) => {
  const Relatorio = sequelize.define('Relatorio', {
    id_usuario: DataTypes.INTEGER,
    data_emissao: DataTypes.DATE,
    tipo: DataTypes.STRING,
  }, {
    tableName: 'relatorios'
  });

  Relatorio.associate = (models) => {
    Relatorio.belongsTo(models.Usuario, {
      foreignKey: 'id_usuario',
      as: 'usuario'
    });
  };

  return Relatorio;
};
