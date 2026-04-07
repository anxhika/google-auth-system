const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/auth", authRoutes);

app.get("/", (req,res)=>{
  res.send("API running");
});

const PORT = 5000;

app.listen(PORT, ()=>{
  console.log(`Server running on ${PORT}`);
});