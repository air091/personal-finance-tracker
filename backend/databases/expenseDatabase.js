const mysql = require("mysql2");

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_EXPENSES_DATABASE,
  })
  .promise();

async function addExpenseWithUser(userId, amount, category, description) {
  const query = `INSERT INTO expense (userId, amount, category, description)
                    VALUES (?, ?, ?, ?)`;
  const [rows] = await pool.query(query, [
    userId,
    amount,
    category,
    description,
  ]);
  return rows;
}

async function getAllExpensesByUser(userId) {
  const query = `SELECT * FROM expense WHERE userId = ?`;
  const [rows] = await pool.query(query, [userId]);
  return rows;
}

module.exports = { addExpenseWithUser, getAllExpensesByUser };
