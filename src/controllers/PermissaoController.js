module.exports = (service) => ({
  listar: async (req, res) => {
    const permissoes = await service.listar();
    res.json(permissoes);
  },

  criar: async (req, res) => {
    const nova = await service.criar(req.body);
    res.status(201).json(nova);
  },

  buscarPorId: async (req, res) => {
    const permissao = await service.buscarPorId(req.params.id);
    if (!permissao) return res.status(404).json({ erro: 'Permissão não encontrada' });
    res.json(permissao);
  },

  atualizar: async (req, res) => {
    const atualizado = await service.atualizar(req.params.id, req.body);
    if (!atualizado) return res.status(404).json({ erro: 'Permissão não encontrada' });
    res.json({ mensagem: 'Atualizado com sucesso' });
  },

  excluir: async (req, res) => {
    const excluido = await service.excluir(req.params.id);
    if (!excluido) return res.status(404).json({ erro: 'Permissão não encontrada' });
    res.status(204).send();
  }
});
