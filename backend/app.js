const express = require("express");
const cors = require("cors");
const app = express();
const { db } = require("./db/db");
require("dotenv").config();

const PORT = process.env.PORT; // Use a default port (e.g., 3000) if PORT is not defined in your .env file.

// Middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log(`Listening to port`, PORT);
  });
};

server();
