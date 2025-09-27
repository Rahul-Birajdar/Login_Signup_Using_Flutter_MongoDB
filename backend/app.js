const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/flutter_mongo_app", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use("/api/user", userRoutes);

app.listen(3000, () => console.log("Backend running on port 3000"));
