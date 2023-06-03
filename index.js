const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

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
    return res.status(400).json({
      error: "only array data input and numeric element are allowed!",
    });
  }
  const initValue = 0;
  let sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initValue
  );

  res.status(200).json({ sum: sum });
});

// BE & FE Comm.
const list = [];

app.post("/list", (req, res) => {
  let text = req.body.text;

  list.push(text.toString());
  const newList = [...list];
  res.status(200).json({ list: newList });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
