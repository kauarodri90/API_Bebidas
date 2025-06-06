module.exports = (service) => ({
  listar: async (req, res) => {
    const adicionais = await service.listar();
    res.json(adicionais);
  },

  buscarPorId: async (req, res) => {
    const adicional = await service.buscarPorId(req.params.id);
    if (!adicional) return res.status(404).json({ erro: 'Adicional não encontrado' });
    res.json(adicional);
  },

  criar: async (req, res) => {
    const novo = await service.criar(req.body);
    res.status(201).json(novo);
  },

  atualizar: async (req, res) => {
    await service.atualizar(req.params.id, req.body);
    res.json({ mensagem: 'Adicional atualizado com sucesso' });
  },

  excluir: async (req, res) => {
    await service.excluir(req.params.id);
    res.status(204).send();
  }
});
