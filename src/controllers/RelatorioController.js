module.exports = (service) => ({
  listar: async (req, res) => {
    const relatorios = await service.listar();
    res.json(relatorios);
  },

  criar: async (req, res) => {
    const novo = await service.criar(req.body);
    res.status(201).json(novo);
  },

  buscarPorId: async (req, res) => {
    const relatorio = await service.buscarPorId(req.params.id);
    if (!relatorio) return res.status(404).json({ erro: 'Relatório não encontrado' });
    res.json(relatorio);
  },

  excluir: async (req, res) => {
    const excluido = await service.excluir(req.params.id);
    if (!excluido) return res.status(404).json({ erro: 'Relatório não encontrado' });
    res.status(204).send();
  }
});