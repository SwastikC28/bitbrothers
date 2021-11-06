const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/user");
const { update } = require("../models/User");

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
