const pool = require("../config/database");

class ClientModel {
  static async create(nome, telefone, email) {
    const query = `
        INSERT INTO clientes (nome, telefone, email)
        VALUES ($1, $2, $3)
        RETURNING *;
        `;
    const values = [nome, telefone, email];

    const { rows } = await pool.query(query, values);
    return rows[0];
  }
  static async findAll() {
    const query = "SELECT * FROM clientes ORDER BY id DESC;";
    const { rows } = await pool.query(query);
    return rows;
  }
}

module.exports = ClientModel