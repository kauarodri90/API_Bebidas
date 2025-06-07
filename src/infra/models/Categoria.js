module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define('Categoria', {
    nome: DataTypes.STRING,
  }, {
    tableName: 'categorias'
  });

  Categoria.associate = (models) => {
    Categoria.hasMany(models.Produto, {
      foreignKey: 'id_categoria',
      as: 'produtos'
    });
  };

  return Categoria;
};