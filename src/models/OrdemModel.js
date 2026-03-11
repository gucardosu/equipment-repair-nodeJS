const pool = require('../config/database');

class OrdemModel {
  static async create(equipamento_id, descricao_problema, valor) {
    const query = `
      INSERT INTO ordens_servico (equipamento_id, descricao_problema, valor)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [equipamento_id, descricao_problema, valor];
    
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async findAll() {
    const query = `
      SELECT 
        o.id AS os_numero,
        o.descricao_problema,
        o.status,
        o.valor,
        o.data_entrada,
        e.tipo AS equipamento_tipo,
        e.marca AS equipamento_marca,
        e.modelo AS equipamento_modelo,
        c.nome AS cliente_nome,
        c.telefone AS cliente_telefone
      FROM ordens_servico o
      INNER JOIN equipamentos e ON o.equipamento_id = e.id
      INNER JOIN clientes c ON e.cliente_id = c.id
      ORDER BY o.id DESC;
    `;
    const { rows } = await pool.query(query);
    return rows;
  }
}

module.exports = OrdemModel;