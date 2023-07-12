import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "125634",
    database: "crud3"
});