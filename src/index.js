const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://rogerio:qccoeE0J82q3oTgM@omnistack-y8wzp.mongodb.net/week10?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json())
app.use(routes)

app.listen(3333);