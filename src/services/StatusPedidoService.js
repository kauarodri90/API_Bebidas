class StatusPedidoService {
  constructor(repository) {
    this.repository = repository;
  }

  criar(data) {
    return this.repository.criar(data);
  }

  listar() {
    return this.repository.listar();
  }

  buscarPorId(id) {
    return this.repository.buscarPorId(id);
  }

  atualizar(id, data) {
    return this.repository.atualizar(id, data);
  }

  excluir(id) {
    return this.repository.excluir(id);
  }
}

module.exports = StatusPedidoService;
