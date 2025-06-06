module.exports = (service) => ({
  listarTodos: async (req, res) => {
    const produtos = await service.listarTodos();
    res.json(produtos);
  },

  buscarPorId: async (req, res) => {
    const produto = await service.buscarPorId(req.params.id);
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.json(produto);
  },

  criar: async (req, res) => {
    const novo = await service.criar(req.body);
    res.status(201).json(novo);
  },

  atualizar: async (req, res) => {
    await service.atualizar(req.params.id, req.body);
    res.json({ mensagem: 'Produto atualizado com sucesso' });
  },

  excluir: async (req, res) => {
    await service.excluir(req.params.id);
    res.status(204).send();
  }
});
