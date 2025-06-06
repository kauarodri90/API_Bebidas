module.exports = (service) => ({
  listar: async (req, res) => {
    const categorias = await service.listar();
    res.json(categorias);
  },

  buscarPorId: async (req, res) => {
    const categoria = await service.buscarPorId(req.params.id);
    if (!categoria) return res.status(404).json({ erro: 'Categoria não encontrada' });
    res.json(categoria);
  },

  criar: async (req, res) => {
    const nova = await service.criar(req.body);
    res.status(201).json(nova);
  },

  atualizar: async (req, res) => {
    const { id } = req.params;
    await service.atualizar(id, req.body);
    res.json({ mensagem: 'Categoria atualizada com sucesso' });
  },

  excluir: async (req, res) => {
    await service.excluir(req.params.id);
    res.status(204).send();
  }
});
