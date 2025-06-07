module.exports = (service) => ({
  listar: async (req, res) => {
    const usuarios = await service.listar();
    res.json(usuarios);
  },

  criar: async (req, res) => {
    const novo = await service.criar(req.body);
    res.status(201).json(novo);
  },

  buscarPorId: async (req, res) => {
    const usuario = await service.buscarPorId(req.params.id);
    if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });
    res.json(usuario);
  },

  atualizar: async (req, res) => {
    const atualizado = await service.atualizar(req.params.id, req.body);
    if (!atualizado) return res.status(404).json({ erro: 'Usuário não encontrado' });
    res.json(atualizado);
  },

  excluir: async (req, res) => {
    const excluido = await service.excluir(req.params.id);
    if (!excluido) return res.status(404).json({ erro: 'Usuário não encontrado' });
    res.status(204).send();
  }
});
