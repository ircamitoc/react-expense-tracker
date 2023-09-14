const express = require("express");
const cors = require("cors");
const app = express();
const { db } = require("./db/db");
const { readdirSync } = require("fs");
require("dotenv").config();

const PORT = process.env.PORT; // Use a default port (e.g., 3000) if PORT is not defined in your .env file.

// Middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// routes
readdirSync("./routes").map((route) => {
  if (route !== "index.js") {
    // Exclude the main index.js file from being used as a route
    app.use("/api/v1", require(`./routes/${route}`));
  }
});

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log(`Listening to port`, PORT);
  });
};

server();
