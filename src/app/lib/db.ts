// app/_lib/db.ts
import mysql from "mysql2/promise";

const database = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "newportfolio",
  port: 3306,
});

console.log("Database connection established");

export default database;
