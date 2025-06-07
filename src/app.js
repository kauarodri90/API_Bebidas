require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const db = require('./infra/database');

const app = express();
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

db.sync({ alter: true })
  .then(() => {
    console.log('🟢 Banco sincronizado');
    app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
  });

db.sync().then(() => {
  console.log('🟢 Banco sincronizado');
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
});
