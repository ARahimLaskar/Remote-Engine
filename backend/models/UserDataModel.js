const mongoose = require("mongoose");

const UserDataSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  selectedSkills: {
    type: [String],
    enum: ["Item 1", "Item 2", "Item 3", "Item 4"],
  },
  professionalExperiences: [
    {
      company: String,
      End: String,
      Start: String,
      skills: [String],
    },
  ],
  educationalExperiences: [
    {
      degree: String,
      degreeEnd: String,
      degreeStart: String,
      school: String,
      schoolEnd: String,
      schoolStart: String,
    },
  ],
});

const UserDataModel = mongoose.model("userData", UserDataSchema);

module.exports = UserDataModel;
