class ItemPedidoRepository {
  constructor(ItemModel) {
    this.model = ItemModel;
  }

  async criarEmLote(itens, pedidoId) {
    const itensComPedidoId = itens.map(item => ({ ...item, pedidoId }));
    return await this.model.bulkCreate(itensComPedidoId);
  }
}

module.exports = ItemPedidoRepository;