const mysql = require("mysql2");

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_EXPENSES_DATABASE,
  })
  .promise();

async function addExpenseWithUser(
  userId,
  amount,
  category,
  description,
  method
) {
  const query = `INSERT INTO expense (userId, amount, category, description, method)
                    VALUES (?, ?, ?, ?, ?)`;
  const [rows] = await pool.query(query, [
    userId,
    amount,
    category,
    description,
    method,
  ]);
  return rows;
}

async function getAllExpensesByUser(userId) {
  const query = `SELECT * FROM expense WHERE userId = ?`;
  const [rows] = await pool.query(query, [userId]);
  return rows;
}

async function updateExpenseByUser(userId, updates) {
  const fields = [];
  const values = [];

  if (updates.amount !== undefined) {
    fields.push("amount = ?");
    values.push(updates.amount);
  }
  if (updates.category !== undefined) {
    fields.push("category = ?");
    values.push(updates.category);
  }
  if (updates.description !== undefined) {
    fields.push("description = ?");
    values.push(updates.description);
  }
  if (updates.method !== undefined) {
    fields.push("method = ?");
    values.push(updates.method);
  }
  if (fields.length === 0) return "No fields to update.";
  values.push(updates.expenseId);
  values.push(userId);

  const query = `UPDATE expense 
                SET ${fields.join(", ")} 
                WHERE (expenseId = ? AND userId = ?)`;

  await pool.query(query, values);
  console.log(await getAllExpensesByUser(userId));
  return "Expense updated successfully.";
}

module.exports = {
  addExpenseWithUser,
  getAllExpensesByUser,
  updateExpenseByUser,
};
