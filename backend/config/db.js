const mongoose = require("mongoose");

async function connectDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://A_R_laskar:arlaskar@cluster0.5oeaimw.mongodb.net/remote-engine"
    );
    console.log("connected to database");
  } catch (error) {
    console.log("error connecting database", error);
  }
}
module.exports = { connectDatabase };
