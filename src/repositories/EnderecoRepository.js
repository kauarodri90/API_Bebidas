class EnderecoRepository {
  constructor(model) {
    this.model = model;
  }

  async criar(data) {
    return this.model.create(data);
  }

  async listar() {
    return this.model.findAll();
  }

  async buscarPorId(id) {
    return this.model.findByPk(id);
  }

  async atualizar(id, data) {
    return this.model.update(data, { where: { id } });
  }

  async excluir(id) {
    return this.model.destroy({ where: { id } });
  }
}

module.exports = EnderecoRepository;
