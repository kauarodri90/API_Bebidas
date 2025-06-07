const db = require('../database');
const { DataTypes } = require('sequelize');

const Permissao = require('./Permissao')(db, DataTypes);
const Usuario = require('./Usuario')(db, DataTypes);
const Pedido = require('./Pedido')(db, DataTypes);
const ItemPedido = require('./ItemPedido')(db, DataTypes);
const Produto = require('./Produto')(db, DataTypes);
const Categoria = require('./Categoria')(db, DataTypes);
const Adicional = require('./Adicional')(db, DataTypes);
const Pagamento = require('./Pagamento')(db, DataTypes); 


const models = { Usuario, Pedido, ItemPedido, Produto, Categoria, Adicional, Permissao, Pagamento};

Pedido.associate?.(models);
Permissao.associate?.(models);
Usuario.associate?.(models);
ItemPedido.associate?.(models);
Produto.associate?.(models);
Categoria.associate?.(models);
Adicional.associate?.(models);
Pagamento.associate?.(models);


module.exports = {
  db,
  Permissao,
  Usuario,
  Pedido,
  ItemPedido,
  Produto,
  Categoria,
  Adicional,
  Pagamento,
  
};
