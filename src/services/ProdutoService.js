class ProdutoService {
  constructor(repository) {
    this.repository = repository;
  }

  listarTodos() {
    return this.repository.findAll();
  }

  buscarPorId(id) {
    return this.repository.findById(id);
  }

  criar(data) {
    return this.repository.create(data);
  }

  atualizar(id, data) {
    return this.repository.update(id, data);
  }

  excluir(id) {
    return this.repository.delete(id);
  }
}

module.exports = ProdutoService;
