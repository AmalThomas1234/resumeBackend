require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./dbConnect");
app.use(express.json());
const port = process.env.PORT || 5000;
const userRoute = require("./routes/userRoute");
const path = require("path");

app.use(
  cors({
    origin: ["http://localhost:3000", "https://resumez-app.vercel.app"],

    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

app.use("/api/user/", userRoute);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
