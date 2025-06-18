const bcrypt = require('bcryptjs');

(async () => {
  const senha = '1234567';
  const hash = await bcrypt.hash(senha, 10);
  console.log('Hash gerado:', hash);
})();
