import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Vedantph@2201",
  database: "the_banyan_branch",
  port: "3306",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: " + err.stack);
    return;
  }
  console.log("Connected to the database as ID " + connection.threadId);
});
