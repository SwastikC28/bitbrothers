const User = require("../models/User");

exports.getUsers = async (req, res, next) => {
  try {
    const user = await User.find({});
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ success: false });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ success: false });
  }
};
exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ success: false, error });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ success: false });
  }
};
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ success: false });
  }
};
