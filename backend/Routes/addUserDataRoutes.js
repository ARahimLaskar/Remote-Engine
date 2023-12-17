const { Router } = require("express");
const UserDataModel = require("../models/UserDataModel");
require("dotenv").config();

const addUserDataRoutes = Router();

addUserDataRoutes.post("/", async (req, res) => {
  const { email } = req.body;

  const existingData = await UserDataModel.findOne({ email });
  if (existingData) {
    return res.status(200).json({ msg: "already added" });
  }

  try {
    const newUserData = new UserDataModel(req.body);
    await newUserData.save();
    return res.status(200).json({ msg: "added successfully" });
  } catch (error) {
    return res.status(400).json({ msg: "an error occurred", error });
  }
});

module.exports = addUserDataRoutes;
