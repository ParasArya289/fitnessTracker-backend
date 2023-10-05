const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  foodName: String,
  calories: Number,
  protein: Number,
  carbohydrates: Number,
  fat: Number,
},{timeStamp:true})

const Food = mongoose.model("Food",foodSchema);

model.exports = Food;