class UsuarioRepository {
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
    const usuario = await this.model.findByPk(id);
    if (!usuario) return null;
    return usuario.update(data);
  }

  async excluir(id) {
    const usuario = await this.model.findByPk(id);
    if (!usuario) return null;
    return usuario.destroy();
  }
}

module.exports = UsuarioRepository;
