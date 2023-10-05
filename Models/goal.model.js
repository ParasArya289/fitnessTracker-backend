const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
   goalName: {
     type:String,
     required:true
   },
  goalDescription: {
     type:String,
     required:true
   },
  targetDate:  {
    type: String, 
    default: null,
  },
  targetCaloriesValue:  {
    type: Number, 
    default: null,
   },
  status:{
     type:String,
     required:true
   }
},{timeStamp:true})

const Goal = mongoose.model("Goal",goalSchema);

module.exports = Goal;