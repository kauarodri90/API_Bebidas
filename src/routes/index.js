const express = require('express');
const router = express.Router();

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


console.log('Rotas registradas:');
router.stack.forEach((r) => {
  if (r.route) {
    console.log(`${Object.keys(r.route.methods)} ${r.route.path}`);
  }
});


module.exports = router;
