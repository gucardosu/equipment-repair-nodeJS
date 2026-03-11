const EquipamentModel = require ('../models/EquipamentModel')

class ClientEquipament {
    static async criarEquipamento (req, res) {
        const { cliente_id, tipo, marca, modelo, numero_serie } = req.body;

        if (!cliente_id || !tipo) {
            return res.status(400).json({
                erro: 'O ID do cliente e o tipo do equipamento são obrigatórios.'
            });
        }
        try {
            const newEquipament = await EquipamentModel.create(
                cliente_id, tipo, marca, modelo, numero_serie
            );
            return res.status(201).json(newEquipament);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro interno ao cadastrar equipamento.'})
        }
    }

    static async listEquipament(req, res) {
        try {
            const equipament = await EquipamentModel.findAll();
            return res.status(200).json(equipament);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro interno ao buscar equipamento.'})
        }
    }
}

module.exports = ClientEquipament