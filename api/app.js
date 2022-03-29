const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://nurbolot:hello12345@cluster0.yq5nv.mongodb.net/toDoList"
);

app.use(express.json({ extended: true }));

const ItemsSchema = {
  name: String,
};

const Item = mongoose.model("Item", ItemsSchema);

const toDoItem = new Item({
  name: "buy milk",
});

app.listen(5000, () => {
  console.log("Server started on port 5000.");
});
