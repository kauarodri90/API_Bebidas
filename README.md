# 🍻 Sistema de Pedidos de Bebidas - API REST

API desenvolvida com foco em gestão de pedidos de bebidas, permitindo cadastro de produtos, categorias, adicionais, usuários, permissões, formas de pagamento e controle de pedidos com autenticação via JWT.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** + **Express**
- **Sequelize** (ORM)
- **PostgreSQL**
- **JWT** (JSON Web Token)
- **Docker** (opcional)
- Arquitetura com separação em `models`, `repositories`, `services`, `controllers` e `middlewares`

---

## 📁 Estrutura do Projeto
bebidas-api/
├── src/
│ ├── controllers/ # Lógica dos endpoints
│ ├── infra/
│ │ ├── database.js # Conexão com o banco
│ │ └── models/ # Modelos Sequelize
│ ├── middlewares/ # Autenticação JWT
│ ├── repositories/ # Acesso ao banco
│ ├── routes/ # Rotas da aplicação
│ ├── services/ # Regras de negócio
│ └── app.js # Inicialização da aplicação
├── .env.example # Variáveis de ambiente
├── package.json
└── README.md

---

## 🔐 Autenticação

- Utiliza JWT (JSON Web Token)
- O login retorna um `token` que deve ser enviado em `Authorization: Bearer TOKEN` para rotas protegidas

---

## 📦 Funcionalidades

- ✅ CRUD de **Usuários** com vínculo à permissão
- ✅ CRUD de **Permissões** (admin, cliente etc.)
- ✅ CRUD de **Produtos** com vínculo à categoria
- ✅ CRUD de **Categorias** de produtos
- ✅ CRUD de **Adicionais**
- ✅ CRUD de **Pedidos** com itens associados
- ✅ CRUD de **Formas de Pagamento**
- ✅ Middleware de **autenticação JWT**

---

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/bebidas-api.git
cd bebidas-api

---


🧑‍💻 Autor
Desenvolvido por Kauã Azevedo — Engenharia de Software
GitHub: @kauarodri90