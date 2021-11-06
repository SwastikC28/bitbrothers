const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name of the user"],
  },
  userName: {
    type: String,
    required: [true, "Please enter the username of the user"],
  },

  password: {
    type: String,
    required: [true, "Please enter the password of the user"],
    immutable: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
