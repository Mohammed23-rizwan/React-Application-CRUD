import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "reacts",
});

app.listen(8800, () => {
  console.log("backend connected successfully");
});

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.json("backend connected successfully");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM book ";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const instq = "INSERT INTO book (`name`,`desc`,`cover`) VALUES (?)";
  const values = [req.body.name, req.body.desc, req.body.cover];
  db.query(instq, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.delete("/books/:id", (req, res) => {
  const bookid = req.params.id;
  const q = "DELETE FROM book WHERE id = ?";
  db.query(q, [bookid], (err, data) => {
    if (err) return res.json(err);
    return res.json("deleted succesfully");
  });
});

app.put("/books/:id", (req, res) => {
  const bookid = req.params.id;
  const q = "UPDATE book SET `name`= ?,`desc`=?,`cover`=? WHERE id =?";
  const values = [req.body.name, req.body.desc, req.body.cover];
  db.query(q, [...values, bookid], (err, data) => {
    if (err) return res.json(err);
    return res.json("update successfully");
  });
});
