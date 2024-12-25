const { registerUser } = require("../services/userService");

// registering a new user
const userController = async (req, res) => {
  const { username, password } = req.body;

  try {
    await registerUser(username, password);
    res.status(201).json({
      message: "User registered successfully.",
      success: true,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { userController };
