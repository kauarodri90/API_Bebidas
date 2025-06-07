class PedidoRepository {
  constructor(PedidoModel) {
    this.model = PedidoModel;
  }

  async criar(dados) {
    return await this.model.create(dados, { include: ['itens'] });
  }

  async listarTodos() {
    return await this.model.findAll({ include: ['itens'] });
  }

  async buscarPorId(id) {
    return await this.model.findByPk(id, { include: ['itens'] });
  }

  async atualizar(id, dados) {
    await this.model.update(dados, { where: { id } });
    return await this.buscarPorId(id);
  }
}

module.exports = PedidoRepository;