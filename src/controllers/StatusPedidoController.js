module.exports = (service) => ({
  listar: async (req, res) => {
    const status = await service.listar();
    res.json(status);
  },

  criar: async (req, res) => {
    const novo = await service.criar(req.body);
    res.status(201).json(novo);
  },

  buscarPorId: async (req, res) => {
    const status = await service.buscarPorId(req.params.id);
    if (!status) return res.status(404).json({ erro: 'Status não encontrado' });
    res.json(status);
  },

  atualizar: async (req, res) => {
    const atualizado = await service.atualizar(req.params.id, req.body);
    if (!atualizado) return res.status(404).json({ erro: 'Status não encontrado' });
    res.json(atualizado);
  },

  excluir: async (req, res) => {
    const excluido = await service.excluir(req.params.id);
    if (!excluido) return res.status(404).json({ erro: 'Status não encontrado' });
    res.status(204).send();
  }
});