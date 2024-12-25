const express = require("express");
const { userController } = require("../controllers/userController");
const router = express.Router();

// POST - registering a new user
router.post("/user/register", userController);
// Example request1:
// POST: /api/user/register
// Request body: { "username": "user1", "password": "password1" }
// Response: { "message": "User registered successfully.", "success": true }

// Example request2:
// POST: /api/user/register
// Request body: { "username": "user1", "password": "password1" }
// Response: { "message": "This user already exists." }

module.exports = router;
