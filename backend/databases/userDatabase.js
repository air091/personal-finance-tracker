const mysql = require("mysql2");

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_USER_DATABASE,
}).promise();

async function getUsers () {
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
}

async function getUserById (id) {
    const [rows] = await pool.query(`SELECT * FROM users 
                                    WHERE userId = ?`, [id]) ;
    return rows[0];
}

async function addUser(username, email, password) {
    const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    const [rows] = await pool.query(query, [username, email, password]);
    console.log(await getUserById(rows.insertId));
    return "User successfully added.";
}

async function updateUser(id, updates) {
    const fields = [];
    const values = [];

    if (updates.username !== undefined) {
        fields.push("username = ?");
        values.push(updates.username);
    }
    if (updates.email !== undefined) {
        fields.push("email = ?");
        values.push(updates.email);
    }
    if (updates.password !== undefined) {
        fields.push("password = ?");
        values.push(updates.password);
    }

    if (fields.length === 0) return "No fields to update";

    values.push(id);

    const query = `UPDATE users SET ${fields.join(", ")} WHERE userId = ?`;
    await pool.query(query, values);
    console.log(await getUserById(id));
    return "User successfully updated.";
}

async function deleteUser(id) {
    console.log(await getUserById(id));
    const query = `DELETE FROM users WHERE userId = ?`;
    await pool.query(query, [id]);
    return "User successfully deleted.";
}

module.exports = {getUsers, getUserById, addUser, updateUser, deleteUser};