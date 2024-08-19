const express = require("express");
const cors = require("cors");
const AuthRouter = require("./routes/auth.route.js");
require("dotenv").config();
require("./connection/mongoDB.js");

const port = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", AuthRouter);

app.get("/", (req, res) => {
  res.json({ message: "backend homepage" });
});

app.listen(port, () => {
  console.log(`this app is running on http://localhost:${port}`);
});
