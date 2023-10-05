const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
   goalName: String,
  goalDescription: String,
    targetDate:  {
    type: String, 
    default: null,
  },
  targetCaloriesValue:  {
    type: Number, 
    default: null,
   },
  status: "In Progress",
},{timeStamp:true})

const Goal = mongoose.model("Goal",goalSchema);

model.exports = Goal;