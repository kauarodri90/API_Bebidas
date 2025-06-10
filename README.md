# 🍻 Sistema de Pedidos de Bebidas - API REST

API desenvolvida com foco em gestão de pedidos de bebidas, permitindo cadastro de produtos, categorias, adicionais, usuários, permissões, formas de pagamento, controle de pedidos, status de pedidos e geração de relatórios. Inclui autenticação via JWT.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** + **Express**
- **Sequelize** (ORM)
- **PostgreSQL**
- **JWT** (JSON Web Token)
- **Docker** (para deploy/local)
- Arquitetura organizada em:
  - `models`, `repositories`, `services`, `controllers`, `middlewares`

---

## 📁 Estrutura do Projeto

```
bebidas-api/
├── src/
│   ├── controllers/         # Lógica dos endpoints
│   ├── infra/
│   │   ├── database.js      # Conexão com o banco
│   │   └── models/          # Modelos Sequelize
│   ├── middlewares/         # Autenticação JWT
│   ├── repositories/        # Acesso ao banco
│   ├── routes/              # Rotas da aplicação
│   ├── services/            # Regras de negócio
│   └── app.js               # Inicialização da aplicação
├── .env.example             # Variáveis de ambiente
├── Dockerfile               # Docker config
├── package.json
└── README.md
```

---

## 🔐 Autenticação

- Utiliza **JWT**
- O login retorna um `token`
- Envie o token em **`Authorization: Bearer TOKEN_AQUI`** nas rotas protegidas

---

## 📦 Funcionalidades

| Funcionalidade         | Descrição                               |
|------------------------|-------------------------------------------|
| Usuários               | Cadastro e autenticação de usuários       |
| Permissões             | Gerenciamento de níveis de acesso         |
| Produtos               | CRUD de produtos com categoria            |
| Categorias             | CRUD de categorias de produtos            |
| Adicionais             | CRUD de adicionais extras                 |
| Pedidos                | Cadastro de pedidos com múltiplos itens   |
| Itens do Pedido        | Inclusão de itens em lote nos pedidos     |
| Pagamentos             | Registro de formas de pagamento           |
| Endereços              | Endereços associados a usuários/pedidos   |
| Status do Pedido       | Situação atual de um pedido               |
| Relatórios             | Consulta consolidada de dados             |
| Autenticação           | Proteção de rotas com middleware JWT      |

---

## 🛠️ Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/bebidas-api.git
cd bebidas-api

# 2. Instale as dependências
npm install

# 3. Copie e edite o .env
cp .env.example .env

# 4. Rode a aplicação
npm run dev
```

---

## 🐳 Docker (Execução com Docker)

```bash
# 1. Build da imagem
docker build -t bebidas-api .

# 2. Execute o container
docker run -p 3000:3000 --env-file .env bebidas-api
```

---

## 📡 Endpoints Principais

| Método | Rota                   | Descrição                      |
|--------|------------------------|--------------------------------|
| POST   | `/login`               | Login e geração de token       |
| GET    | `/usuarios`            | Lista de usuários              |
| GET    | `/produtos`            | Lista de produtos              |
| POST   | `/pedidos`             | Criação de novo pedido         |
| GET    | `/status-pedidos`      | Lista de status possíveis      |
| GET    | `/relatorios`          | Geração de relatórios          |
| GET    | `/enderecos/:id`       | Consulta de endereço           |

> Para demais rotas, consulte os arquivos de rota em `src/routes/index.js`

---

## 👤 Autor

Desenvolvido por **Kauã Azevedo** — Engenharia de Software  
GitHub: [@kauarodri90](https://github.com/kauarodri90)