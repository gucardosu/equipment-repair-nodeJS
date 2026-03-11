const pool = require("../config/database");

class EquipamentModel {
  static async create(client_id, tipo, marca, modelo, numero_serie) {
    const query = `
      INSERT INTO equipamentos (cliente_id, tipo, marca, modelo, numero_serie)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    const values = [client_id, tipo, marca, modelo, numero_serie];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async findAll() {
    const query = `
        SELECT 
        e.*, 
        c.nome AS cliente_nome 
      FROM equipamentos e
      INNER JOIN clientes c ON e.cliente_id = c.id
      ORDER BY e.id DESC;
    `;
    const { rows } = await pool.query(query);
    return rows;
  }
}

module.exports = EquipamentModel;
