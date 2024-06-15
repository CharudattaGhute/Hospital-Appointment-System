const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/routes");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://ghutecharudatta:Charudatta@cluster0.prqkren.mongodb.net/appoinment"
);

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Database Connected");
});
app.use("/api", router);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
