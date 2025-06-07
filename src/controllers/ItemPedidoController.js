module.exports = (service) => ({
  criarEmLote: async (req, res) => {
    const { itens, pedidoId } = req.body;
    try {
      const resultado = await service.criarEmLote(itens, pedidoId);
      res.status(201).json(resultado);
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao criar itens do pedido', detalhes: error.message });
    }
  }
});