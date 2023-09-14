const express = require("express");
const router = express.Router(); // Create a router instance, not an app instance

// Define routes using the router
router.get("/", (req, res) => {
  res.send("Hello from transactions route!");
});

module.exports = router;
