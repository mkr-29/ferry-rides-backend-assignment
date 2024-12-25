const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const ridesRoutes = require("./routes/rideRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// user routes
app.use("/api", userRoutes);

// rides routes
app.use("/api", ridesRoutes);

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
