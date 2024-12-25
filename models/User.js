const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// defining the user schema
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// hashing the password before saving
userSchema.pre("save", async function (next) {
  // if the password is not modified, skip this middleware
  if (!this.isModified("password")) return next();
  
  // hashing the password using bcrypt before saving
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", userSchema);
