const express = require('express');
const router = express.Router();
const { Pedido, ItemPedido } = require('../infra/models');


//Usuario

const Usuario = require('../infra/models/Usuario');
const UsuarioRepository = require('../repositories/UsuarioRepository');
const UsuarioService = require('../services/UsuarioService');
const UsuarioControllerFactory = require('../controllers/UsuarioController');

const usuarioRepo = new UsuarioRepository(Usuario);
const usuarioService = new UsuarioService(usuarioRepo);
const usuarioController = UsuarioControllerFactory(usuarioService);

router.get('/usuarios', usuarioController.listar);
router.post('/usuarios', usuarioController.criar);
router.get('/usuarios/:id', usuarioController.buscarPorId);
router.put('/usuarios/:id', usuarioController.atualizar);
router.delete('/usuarios/:id', usuarioController.excluir);



//Produto
const Produto = require('../infra/models/Produto');
const ProdutoRepository = require('../repositories/ProdutoRepository.js');
const ProdutoService = require('../services/ProdutoService');
const ProdutoControllerFactory = require('../controllers/ProdutoController');

const produtoRepo = new ProdutoRepository(Produto);
const produtoService = new ProdutoService(produtoRepo);
const produtoController = ProdutoControllerFactory(produtoService);

router.get('/produtos', produtoController.listarTodos);
router.post('/produtos', produtoController.criar);
router.get('/produtos/:id', produtoController.buscarPorId);
router.put('/produtos/:id', produtoController.atualizar);
router.delete('/produtos/:id', produtoController.excluir);


// Categoria
const Categoria = require('../infra/models/Categoria');
const CategoriaRepository = require('../repositories/CategoriaRepository');
const CategoriaService = require('../services/CategoriaService');
const CategoriaControllerFactory = require('../controllers/CategoriaController');

const categoriaRepo = new CategoriaRepository(Categoria);
const categoriaService = new CategoriaService(categoriaRepo);
const categoriaController = CategoriaControllerFactory(categoriaService);

router.get('/categorias', categoriaController.listar);
router.post('/categorias', categoriaController.criar);
router.get('/categorias/:id', categoriaController.buscarPorId);
router.put('/categorias/:id', categoriaController.atualizar);
router.delete('/categorias/:id', categoriaController.excluir);


//Adicional
const Adicional = require('../infra/models/Adicional');
const AdicionalRepository = require('../repositories/AdicionalRepository');
const AdicionalService = require('../services/AdicionalService');
const AdicionalControllerFactory = require('../controllers/AdicionalController');

const adicionalRepo = new AdicionalRepository(Adicional);
const adicionalService = new AdicionalService(adicionalRepo);
const adicionalController = AdicionalControllerFactory(adicionalService);

router.get('/adicionais', adicionalController.listar);
router.get('/adicionais/:id', adicionalController.buscarPorId);
router.post('/adicionais', adicionalController.criar);
router.put('/adicionais/:id', adicionalController.atualizar);
router.delete('/adicionais/:id', adicionalController.excluir);


// Pedido
const PedidoRepository = require('../repositories/PedidoRepository');
const PedidoService = require('../services/PedidoService');
const PedidoControllerFactory = require('../controllers/PedidoController');

const pedidoRepo = new PedidoRepository(Pedido, ItemPedido);
const pedidoService = new PedidoService(pedidoRepo);
const pedidoController = PedidoControllerFactory(pedidoService);

router.get('/pedidos', pedidoController.listar);
router.get('/pedidos/:id', pedidoController.buscarPorId);
router.post('/pedidos', pedidoController.criar);
router.put('/pedidos/:id', pedidoController.atualizar);
router.delete('/pedidos/:id', pedidoController.deletar);


//Permissões
const { Permissao } = require('../infra/models');
const PermissaoRepository = require('../repositories/PermissaoRepository');
const PermissaoService = require('../services/PermissaoService');
const PermissaoControllerFactory = require('../controllers/PermissaoController');

const permissaoRepo = new PermissaoRepository(Permissao);
const permissaoService = new PermissaoService(permissaoRepo);
const permissaoController = PermissaoControllerFactory(permissaoService);

router.get('/permissoes', permissaoController.listar);
router.post('/permissoes', permissaoController.criar);
router.get('/permissoes/:id', permissaoController.buscarPorId);
router.put('/permissoes/:id', permissaoController.atualizar);
router.delete('/permissoes/:id', permissaoController.excluir);

console.log('Rotas registradas:');
router.stack.forEach((r) => {
  if (r.route) {
    console.log(`${Object.keys(r.route.methods)} ${r.route.path}`);
  }
});


module.exports = router;
