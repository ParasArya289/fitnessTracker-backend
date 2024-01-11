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
},{ timestamps: true })

goalSchema.pre('save', function (next) {
  if (this.targetDate!== null && this.targetDate.length <= 0) {
    this.targetDate = null;
  }
  next();
});

const Goal = mongoose.model("Goal",goalSchema);

module.exports = Goal;