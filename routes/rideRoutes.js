// routes/rideRoutes.js
const express = require("express");
const router = express.Router();
const Ride = require("../models/Ride");
const RideDetail = require("../models/RideDetail");

// GET - all rides
router.get("/rides", async (req, res) => {
  try {
    // fetching all rides
    const rides = await Ride.find();

    // returning all rides
    res.status(200).json(rides);
  } catch (error) {
    console.error("Error fetching rides:", error);
    res.status(500).json({ message: "Error fetching rides." });
  }
});

// Example request:
// GET: /api/rides
// Response: [
//   {
//     _id: "676c609557425c29f4e3db97",
//     rideId: "UID1",
//     distance: 23,
//     fare: 189,
//   },
//   {
//     _id: "676c611e57425c29f4e3db98",
//     rideId: "UID2",
//     distance: 14,
//     fare: 137,
//   },
//   {
//     _id: "676c613a57425c29f4e3db99",
//     rideId: "UID3",
//     distance: 57,
//     fare: 344,
//   },
// ];

// GET - fetching ride details by rideId
router.get("/ride-details/:rideId", async (req, res) => {
  // extracting rideId from request parameters
  const { rideId } = req.params;

  try {
    // finding ride by rideId
    const rideDetail = await RideDetail.findOne({ rideId });

    if (!rideDetail) {
      return res.status(404).json({ message: "Ride details not found." });
    }

    // returning ride details
    res.status(200).json(rideDetail);
  } catch (error) {
    console.error("Error fetching ride details:", error);
    res.status(500).json({ message: "Error fetching ride details." });
  }
});

// Example request:
// GET: /api/ride-details/UID1
// Response: {
//   "vehicleDetails": {
//       "vehicleType": "SUV",
//       "vehicleNumber": "DL5LMN9876",
//       "vehicleName": "Mahindra XUV500"
//   },
//   "pickupDetails": {
//       "pickupTime": "2024-12-26T16:00:00Z",
//       "pickupLocation": "Gurgaon, Haryana"
//   },
//   "dropoffDetails": {
//       "dropoffTime": "2024-12-26T16:40:00Z",
//       "dropoffLocation": "Cyber Hub, Gurgaon"
//   },
//   "fare": {
//       "rideFare": 320,
//       "tax": 24,
//       "paymentMethod": "Credit Card"
//   },
//   "_id": "676c6cb557425c29f4e3db9c",
//   "rideId": "UID3",
//   "driverName": "Neha Sharma",
//   "rideDate": "2024-12-26T16:00:00.000Z",
//   "rideStatus": "Completed"
// }

module.exports = router;
