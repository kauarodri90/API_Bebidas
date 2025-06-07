class PagamentoRepository {
  constructor(model) {
    this.model = model;
  }

  criar(data) {
    return this.model.create(data);
  }

  listar() {
    return this.model.findAll();
  }

  buscarPorId(id) {
    return this.model.findByPk(id);
  }

  atualizar(id, data) {
    return this.model.update(data, { where: { id } });
  }

  excluir(id) {
    return this.model.destroy({ where: { id } });
  }
}

module.exports = PagamentoRepository;