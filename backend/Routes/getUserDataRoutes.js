const { Router } = require("express");
const UserDataModel = require("../models/UserDataModel");
require("dotenv").config();

const getUserDataRoutes = Router();

getUserDataRoutes.get("/all", async (req, res) => {
  try {
    const allUserData = await UserDataModel.find();
    return res.status(200).json(allUserData);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while fetching user data" });
  }
});

module.exports = getUserDataRoutes;
