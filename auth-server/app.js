const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

// Connect DB
const db = require("./confiq/db").MongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`Database connected successfully ${db}`);
  })
  .catch((err) => {
    console.log(`Unable to connect whit db ${err}`);
  });

// Bring in the users route
const users = require("./routes/api/users");
app.use("/api/users", users);

app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT}`);
});
