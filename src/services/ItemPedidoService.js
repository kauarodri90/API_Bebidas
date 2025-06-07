class ItemPedidoService {
  constructor(repository) {
    this.repository = repository;
  }

  async criarEmLote(itens, pedidoId) {
    return await this.repository.criarEmLote(itens, pedidoId);
  }
}

module.exports = ItemPedidoService;