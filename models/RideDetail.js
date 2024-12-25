const mongoose = require("mongoose");

// creating a schema for the ride details
const rideDetailSchema = new mongoose.Schema({
  rideId: {
    type: String,
    required: true,
    unique: true,
  },
  driverName: {
    type: String,
    required: true,
  },
  vehicleDetails: {
    vehicleType: {
      type: String,
      required: true,
    },
    vehicleNumber: {
      type: String,
      required: true,
    },
    vehicleName: {
      type: String,
      required: true,
    },
  },
  pickupDetails: {
    pickupTime: {
      type: String,
      required: true,
    },
    pickupLocation: {
      type: String,
      required: true,
    },
  },
  dropoffDetails: {
    dropoffTime: {
      type: String,
      required: true,
    },
    dropoffLocation: {
      type: String,
      required: true,
    },
  },
  fare: {
    rideFare: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
  },
  rideDate: {
    type: Date,
    required: true,
  },
  rideStatus: {
    type: String,
    required: true,
  },
});

const RideDetail = mongoose.model("RideDetail", rideDetailSchema);

module.exports = RideDetail;
