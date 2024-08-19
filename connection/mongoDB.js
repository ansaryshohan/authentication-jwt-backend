const mongoose = require("mongoose");

const mongo_uri = process.env.MONGO_URI;

mongoose
  .connect(mongo_uri)
  .then(() => {
    console.log("mongodb database is connected");
  })
  .catch((err) => console.log("mongodb connection error " + err));
