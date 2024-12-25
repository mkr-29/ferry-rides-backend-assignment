const User = require("../models/User");

// registering a new user
const registerUser = async (username, password) => {
  try {
    // checking if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      throw new Error("This user already exists.");
    }

    // creating new user
    await User.create({ username, password });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { registerUser };
