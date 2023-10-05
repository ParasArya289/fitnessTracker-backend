const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  },
  duration: {
    type:Number,
    required:true
  },
  exerciseType:  {
    type:String,
    required:true
  },
  caloriesBurnt:  {
    type:Number,
    required:true
  },
},{timeStamp:true})

const Exercise = mongoose.model("Exercise",exerciseSchema);

module.exports = Exercise;