const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  foodName: {
    type:String,
    required:true
  },
  calories: {
    type:Number,
    required:true
  },
  protein: {
    type:Number,
    required:true
  },
  carbohydrates: {
    type:Number,
    required:true
  },
  fat: {
    type:Number,
    required:true
  },
},{timestamps:true})

const Food = mongoose.model("Food",foodSchema);

module.exports = Food;