const mongoose = require("mongoose");

const firmSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
  },
  Sector: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
  },
  Industry: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
  },
  PublicPrivate: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
  },
  Address: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
  },
  Registration: {
    type: Number,
    unique: true,
    required: true,
    min: 1000000,
    max: 9999999,
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} is not an integer value"
    }
  },
  Email: { 
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    min: 6,
    max: 255
  }
});

module.exports = mongoose.model("Firm", firmSchema);
