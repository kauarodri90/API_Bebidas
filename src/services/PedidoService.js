class PedidoService {
  constructor(pedidoRepo, itemRepo) {
    this.pedidoRepo = pedidoRepo;
    this.itemRepo = itemRepo;
  }

  async criarPedido(dados) {
    const { itens, ...pedidoDados } = dados;
    const pedido = await this.pedidoRepo.criar(pedidoDados);
    await this.itemRepo.criarEmLote(itens, pedido.id);
    return await this.pedidoRepo.buscarPorId(pedido.id);
  }

  async listarPedidos() {
    return await this.pedidoRepo.listarTodos();
  }

  async buscarPorId(id) {
    return await this.pedidoRepo.buscarPorId(id);
  }

  async atualizar(id, dados) {
    return await this.pedidoRepo.atualizar(id, dados);
  }
}

module.exports = PedidoService;