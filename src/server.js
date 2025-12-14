const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.status(200).json({
    message: "Hello World - TEDDY OPEN FINANCE",
    service: "teddy-open-finance",
    timestamp: new Date().toISOString()
  });
});

app.get("/health", (_req, res) => {
  res.status(200).send("ok");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`teddy-open-finance listening on port ${port}`);
});

