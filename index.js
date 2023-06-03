const express = require("express");

const app = express();

app.use(express.json());

// hello world
app.get("/hello", (req, res) => {
  res.status(200).json({ msg: "Hello world" });
});

// with params
app.get("/echo/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({ id: id });
});

// mumber array post req.
app.post("/sum", (req, res) => {
  let numbers = req.body.numbers;

  if (!Array.isArray(numbers) || numbers.some(isNaN)) {
    return res
      .status(400)
      .json({
        error: "only array data input and numeric elements are allowed!",
      });
  }
  let sum = numbers.reduce((x, y) => {
    return x + y;
  });

  res.status(201).json({ sum: sum });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
