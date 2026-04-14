const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());

// API route
// Static files
app.use(express.static(path.join(__dirname, "./client/dist")));

// React routing fix (IMPORTANT)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});
const port = 5002;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});