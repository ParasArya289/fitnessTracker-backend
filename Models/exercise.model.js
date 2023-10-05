const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: String,
  duration:Number,
  exerciseType: Number,
  caloriesBurnt: Number,
},{timeStamp:true})

const Exercise = mongoose.model("Exercise",exerciseSchema);

model.exports = Exercise;