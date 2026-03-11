const ClientModel = require('../models/ClientModel');

class ClientController {
  static async criarCliente(req, res) {
    // Pegamos os dados do corpo da requisição (JSON)
    const { nome, telefone, email } = req.body;

    // Validação básica
    if (!nome) {
      return res.status(400).json({ erro: 'O nome do cliente é obrigatório.' });
    }

    try {
      const novoCliente = await ClientModel.create(nome, telefone, email);
      return res.status(201).json(novoCliente);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro interno ao criar cliente.' });
    }
  }

  static async listarClientes(req, res) {
    try {
      const clientes = await ClientModel.findAll();
      return res.status(200).json(clientes);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro interno ao buscar clientes.' });
    }
  }
}

module.exports = ClientController;