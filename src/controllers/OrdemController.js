const OrdemModel = require('../models/OrdemModel');

class OrdemController {
  static async criarOrdem(req, res) {
    const { equipamento_id, descricao_problema, valor } = req.body;

    if (!equipamento_id || !descricao_problema) {
      return res.status(400).json({ 
        erro: 'O ID do equipamento e a descrição do problema são obrigatórios.' 
      });
    }

    try {
      const novaOrdem = await OrdemModel.create(equipamento_id, descricao_problema, valor);
      return res.status(201).json(novaOrdem);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro interno ao criar Ordem de Serviço.' });
    }
  }

  static async listarOrdens(req, res) {
    try {
      const ordens = await OrdemModel.findAll();
      return res.status(200).json(ordens);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro interno ao buscar Ordens de Serviço.' });
    }
  }
}

module.exports = OrdemController;