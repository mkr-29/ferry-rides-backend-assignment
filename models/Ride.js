const mongoose = require("mongoose");

// creating a schema for the ride
const rideSchema = new mongoose.Schema({
  rideId: {
    type: String,
    required: true,
    unique: true,
  },
  distance: {
    type: Number,
    required: true,
  },
  fare: {
    type: Number,
    required: true,
  },
});

const Ride = mongoose.model("Ride", rideSchema);

module.exports = Ride;
