# 🏠 Uni-Rent API

**Uni-Rent** é uma API desenvolvida com NestJS para gerenciamento de aluguel de imóveis, permitindo o cadastro e controle de proprietários, clientes e imóveis.

## 🚀 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [JWT (JSON Web Token)](https://jwt.io/) para autenticação

---

## 📁 Estrutura do Projeto
---

```src/
├── api/
│   ├── clients/       # Módulo de clientes
│   ├── houses/        # Módulo de imóveis
│   └── owners/        # Módulo de proprietários
├── auth/              # Módulo de autenticação
└── data/   

---

## 📦 Entidades Principais

- **Owner**: Proprietários de imóveis
- **Client**: Clientes interessados em alugar imóveis
- **House**: Imóveis disponíveis para aluguel

---

## 🛠️ Configuração do Banco de Dados

O projeto utiliza **PostgreSQL** como banco de dados. As configurações de conexão são definidas por variáveis de ambiente.

### 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

BD_HOST=localhost
BD_PORT=5432
BD_USERNAME=postgres
BD_PASSWORD=sua_senha
BD_DATABASE=uni_rent
JWT_KEYSECRET=sua_chave_secreta
EXPIRATION_TOKEN=1d

yaml
Copiar
Editar

---

## ⚙️ Instalação e Execução

```bash
# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run start:dev
📮 Endpoints Principais
🔐 Autenticação
POST /auth/session - Criar uma sessão de autenticação

👤 Proprietários (Owners)
POST /owners/save - Cadastrar um novo proprietário

GET /owners - Listar todos os proprietários

GET /owners/:idOwner - Buscar imóveis de um proprietário específico