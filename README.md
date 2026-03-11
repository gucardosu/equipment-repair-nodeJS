API de Gerenciamento de Ordens de Serviço

Uma API RESTful desenvolvida em Node.js para gerenciar clientes, equipamentos e ordens de serviço (OS) de uma assistência técnica de informática. O sistema permite rastrear o status de manutenções, vincular computadores aos seus respectivos donos e registrar o histórico de problemas e valores.

##Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript.
* **Express**: Framework web para construção das rotas e servidor.
* **PostgreSQL**: Banco de dados relacional.
* **node-postgres (pg)**: Driver do PostgreSQL para executar queries em SQL puro.
* **Dotenv**: Gerenciamento de variáveis de ambiente.
* **Arquitetura MVC**: Separação clara entre Rotas, Controladores (Controllers) e Regras de Negócio/Banco de Dados (Models).

##Estrutura do Projeto

O projeto segue o padrão MVC (Model-View-Controller) adaptado para APIs REST (onde a "View" é a resposta em JSON):

```text
kelltech-os/
├── src/
│   ├── config/
│   │   └── database.js       # Conexão com o pool do PostgreSQL
│   ├── controllers/          # Lógica de requisição e resposta
│   │   ├── ClientController.js
│   │   ├── EquipamentController.js
│   │   └── OrdemController.js
│   ├── models/               # Queries SQL puras e interação com o DB
│   │   ├── ClientModel.js
│   │   ├── EquipamentModel.js
│   │   └── OrdemModel.js
│   ├── routes/               # Definição dos endpoints da API
│   │   ├── ClientRoutes.js
│   │   ├── EquipamentRoutes.js
│   │   └── OrdemRoutes.js
│   └── server.js             # Ponto de inicialização do Express
├── .env                      # Variáveis de ambiente (não versionado)
└── package.json
