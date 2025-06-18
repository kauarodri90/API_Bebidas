module.exports = (pedidoService) => ({
  listar: async (req, res) => {
    try {
      const pedidos = await pedidoService.listarPedidos();
      res.json(pedidos);
    } catch (err) {
      console.error("❌ Erro no controller ao listar pedidos:", err);
      res.status(500).json({ erro: 'Erro ao listar pedidos' });
    }
  },

  buscarPorId: async (req, res) => {
    try {
      const pedido = await pedidoService.buscarPorId(req.params.id);
      if (pedido) {
        res.json(pedido);
      } else {
        res.status(404).json({ erro: 'Pedido não encontrado' });
      }
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao buscar pedido' });
    }
  },

  criar: async (req, res) => {
    try {
      const novo = await pedidoService.criarPedido(req.body);
      res.status(201).json(novo);
    } catch (err) {
      console.error("❌ Erro ao criar pedido:", err);
      res.status(400).json({ erro: 'Erro ao criar pedido' });
    }
  },

  atualizar: async (req, res) => {
    try {
      const atualizado = await pedidoService.atualizar(req.params.id, req.body);
      res.json(atualizado);
    } catch (err) {
      res.status(400).json({ erro: 'Erro ao atualizar pedido' });
    }
  },

  deletar: async (req, res) => {
    try {
      await pedidoService.deletar(req.params.id);
      res.status(204).end();
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao deletar pedido' });
    }
  }
});
