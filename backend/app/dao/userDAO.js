import pool from '../config/db.js';

const userDAO = {
  async getAllUsers() {
    const result = await pool.query('SELECT * FROM usuarios');
    return result.rows;
  }
};

export default userDAO;
