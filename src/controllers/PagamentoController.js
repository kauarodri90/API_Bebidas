module.exports = (service) => ({
  listar: async (req, res) => {
    const pagamentos = await service.listar();
    res.json(pagamentos);
  },

  criar: async (req, res) => {
    const novo = await service.criar(req.body);
    res.status(201).json(novo);
  },

  buscarPorId: async (req, res) => {
    const pagamento = await service.buscarPorId(req.params.id);
    if (!pagamento) return res.status(404).json({ erro: 'Pagamento não encontrado' });
    res.json(pagamento);
  },

  atualizar: async (req, res) => {
    const atualizado = await service.atualizar(req.params.id, req.body);
    if (!atualizado) return res.status(404).json({ erro: 'Pagamento não encontrado' });
    res.json({ mensagem: 'Atualizado com sucesso' });
  },

  excluir: async (req, res) => {
    const excluido = await service.excluir(req.params.id);
    if (!excluido) return res.status(404).json({ erro: 'Pagamento não encontrado' });
    res.status(204).send();
  }
});