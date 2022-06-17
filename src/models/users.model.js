import { pool } from "./dbConnection.js";

export const getUsers = async () => {
  const [rows] = await pool.query("SELECT * FROM users ORDER BY id");
  return rows;
};

export const insertUser = async (userData) => {
  const [result] = await pool.query("INSERT INTO users SET ?", userData);
  return {
    ...userData,
    id: result.insertId,
  };
};

export const updateUser = async (userData) => {
  const sql = `
      UPDATE users SET
      username = ${pool.escape(userData.username)},
      password = ${pool.escape(userData.password)},
      email = ${pool.escape(userData.email)}
      WHERE id = ${userData.id}`;

  const [result] = await pool.query(sql);
  return result;
};

export const deleteUser = async (id) => {
  const sql = `DELETE FROM users WHERE id=` + pool.escape(id);
  const [result] = await pool.query(sql);
  return result;
};
