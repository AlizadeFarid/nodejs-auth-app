const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = 3000;
dotenv.config();

//Connect to DB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

//Import Routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

//Middleware
app.use(express.json());
//Route Middleware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
