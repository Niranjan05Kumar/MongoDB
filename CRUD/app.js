const express = require("express");
const app = express();
const port = 3000;

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hello, Duniyan!");
});

app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name: "Leonardo DiCaprio",
    age: 25,
    username: "ldicaprio",
    email: "ldicaprio@gmail.com",
  });
  res.send(createdUser);
});

app.get("/read", async (req, res) => {
  let users = await userModel.find({ username: "ldicaprio" });
  res.send(users);
});

app.get("/update", async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate(
    { username: "ldicaprio" },
    { username: "ldicaprioUpdated" },
    { new: true }
  );
  res.send(updatedUser);
});

app.get("/delete", async (req, res) => {
  let users = await userModel.findOneAndDelete({ username: "ldicaprio" });
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
