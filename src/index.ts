import express from "express";

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.send("Hello! The API is up!");
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}.`);
});
