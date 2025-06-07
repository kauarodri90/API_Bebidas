const express = require('express');
const router = express.Router();
const models = require('../infra/models');
const { Pedido, ItemPedido, Usuario, Produto, Categoria, Adicional, Permissao, Pagamento } = models;

const auth = require('../middlewares/auth');

// ---------- Auth ----------
const AuthController = require('../controllers/AuthController');
const authController = AuthController(Usuario);
router.post('/login', authController.login);

// ---------- Usuário ----------
const UsuarioRepository = require('../repositories/UsuarioRepository');
const UsuarioService = require('../services/UsuarioService');
const UsuarioControllerFactory = require('../controllers/UsuarioController');
const usuarioController = UsuarioControllerFactory(new UsuarioService(new UsuarioRepository(Usuario)));

router.get('/usuarios', auth, usuarioController.listar);
router.post('/usuarios', usuarioController.criar); // Registro aberto

// ---------- Produto ----------
const ProdutoRepository = require('../repositories/ProdutoRepository.js');
const ProdutoService = require('../services/ProdutoService');
const ProdutoControllerFactory = require('../controllers/ProdutoController');
const produtoController = ProdutoControllerFactory(new ProdutoService(new ProdutoRepository(Produto)));

router.get('/produtos', produtoController.listarTodos);
router.post('/produtos', auth, produtoController.criar); // protegida
router.get('/produtos/:id', produtoController.buscarPorId);
router.put('/produtos/:id', auth, produtoController.atualizar);
router.delete('/produtos/:id', auth, produtoController.excluir);

// ---------- Categoria ----------
const CategoriaRepository = require('../repositories/CategoriaRepository');
const CategoriaService = require('../services/CategoriaService');
const CategoriaControllerFactory = require('../controllers/CategoriaController');
const categoriaController = CategoriaControllerFactory(new CategoriaService(new CategoriaRepository(Categoria)));

router.get('/categorias', categoriaController.listar);
router.post('/categorias', auth, categoriaController.criar);
router.get('/categorias/:id', categoriaController.buscarPorId);
router.put('/categorias/:id', auth, categoriaController.atualizar);
router.delete('/categorias/:id', auth, categoriaController.excluir);

// ---------- Adicional ----------
const AdicionalRepository = require('../repositories/AdicionalRepository');
const AdicionalService = require('../services/AdicionalService');
const AdicionalControllerFactory = require('../controllers/AdicionalController');
const adicionalController = AdicionalControllerFactory(new AdicionalService(new AdicionalRepository(Adicional)));

router.get('/adicionais', adicionalController.listar);
router.get('/adicionais/:id', adicionalController.buscarPorId);
router.post('/adicionais', auth, adicionalController.criar);
router.put('/adicionais/:id', auth, adicionalController.atualizar);
router.delete('/adicionais/:id', auth, adicionalController.excluir);

// ---------- Pedido ----------
const PedidoRepository = require('../repositories/PedidoRepository');
const PedidoService = require('../services/PedidoService');
const PedidoControllerFactory = require('../controllers/PedidoController');
const pedidoController = PedidoControllerFactory(new PedidoService(new PedidoRepository(Pedido, ItemPedido)));

router.get('/pedidos', auth, pedidoController.listar);
router.get('/pedidos/:id', auth, pedidoController.buscarPorId);
router.post('/pedidos', auth, pedidoController.criar);
router.put('/pedidos/:id', auth, pedidoController.atualizar);
router.delete('/pedidos/:id', auth, pedidoController.deletar);


// -----------Itens Pedidos-----------
const ItemPedidoRepository = require('../repositories/ItemPedidoRepository');
const ItemPedidoService = require('../services/ItemPedidoService');
const ItemPedidoControllerFactory = require('../controllers/ItemPedidoController');

const itemPedidoController = ItemPedidoControllerFactory(
  new ItemPedidoService(new ItemPedidoRepository(ItemPedido))
);

router.post('/itens-pedido/lote', auth, itemPedidoController.criarEmLote);

// ---------- Permissão ----------
const PermissaoRepository = require('../repositories/PermissaoRepository');
const PermissaoService = require('../services/PermissaoService');
const PermissaoControllerFactory = require('../controllers/PermissaoController');
const permissaoController = PermissaoControllerFactory(new PermissaoService(new PermissaoRepository(Permissao)));

router.get('/permissoes', auth, permissaoController.listar);
router.post('/permissoes', auth, permissaoController.criar);
router.get('/permissoes/:id', auth, permissaoController.buscarPorId);
router.put('/permissoes/:id', auth, permissaoController.atualizar);
router.delete('/permissoes/:id', auth, permissaoController.excluir);

// ---------- Pagamento ----------
const PagamentoRepository = require('../repositories/PagamentoRepository');
const PagamentoService = require('../services/PagamentoService');
const PagamentoControllerFactory = require('../controllers/PagamentoController');
const pagamentoController = PagamentoControllerFactory(new PagamentoService(new PagamentoRepository(Pagamento)));

router.get('/pagamentos', pagamentoController.listar);
router.post('/pagamentos', auth, pagamentoController.criar);
router.get('/pagamentos/:id', pagamentoController.buscarPorId);
router.put('/pagamentos/:id', auth, pagamentoController.atualizar);
router.delete('/pagamentos/:id', auth, pagamentoController.excluir);

// ---------- Log de rotas ----------
console.log('Rotas registradas:');
router.stack.forEach((r) => {
  if (r.route) console.log(`${Object.keys(r.route.methods)} ${r.route.path}`);
});

module.exports = router;
