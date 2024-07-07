const mongoose = require("mongoose");

const URL =
  "mongodb+srv://thomasamal865:tr8DPSPUHTahar72@cluster0.88p2r4u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(URL);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});
connection.on("error", (error) => {
  console.log(error);
});
