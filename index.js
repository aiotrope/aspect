const express = require("express");

const app = express();

// hello world
app.get("/hello", (req, res) => {
  res.status(200).json({ msg: "Hello world" });
});

// with params
app.get("/echo/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({ id: id });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
