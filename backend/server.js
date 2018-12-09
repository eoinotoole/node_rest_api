const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const { usersRoutes, itemsRoutes } = require("./routes/index");
const { notFound, finalErrorHandler } = require("./handling/errorHandling");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_mysql_rest"
});

db.connect(err => {
  if (err) {
    throw err;
  }

  console.log("db connected");
});

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.db = db;
  next();
});

app.use("/users", usersRoutes);
app.use("/items", itemsRoutes);

//Handle errors
app.use(notFound);
app.use(finalErrorHandler);

app.listen("3000", () => console.log("server listening on port 3000"));
