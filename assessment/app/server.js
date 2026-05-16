const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

app.get("/", (req, res) => {
  res.send("DevOps Assessment App is running behind Nginx");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, HOST, () => {
  console.log(`App running on http://${HOST}:${PORT}`);
});
