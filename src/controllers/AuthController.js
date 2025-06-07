const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = (UsuarioModel) => ({
  login: async (req, res) => {
    const { email, senha } = req.body;
    const usuario = await UsuarioModel.findOne({ where: { email }, include: 'permissao' });
    if (!usuario) return res.status(401).json({ erro: 'Usuário não encontrado' });

    const valido = await bcrypt.compare(senha, usuario.senha);
    if (!valido) return res.status(401).json({ erro: 'Senha incorreta' });

    const token = jwt.sign({
      id: usuario.id,
      permissao: usuario.permissao?.nome
    }, process.env.JWT_SECRET || 'chave_secreta', { expiresIn: '1d' });

    res.json({ token, usuario: { id: usuario.id, nome: usuario.nome, permissao: usuario.permissao?.nome } });
  }
});
