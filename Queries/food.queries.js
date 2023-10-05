const Food = require("../Models/food.model.js");

const getAllFoods = async()=>{
  try{
    const Foods = await Food.find();
    return Foods;
  }catch(error){
    throw new Error("Unable to fetch foods")
  }
}

const createFood = async(data)=>{
  try{
    const newFood = new Food(data)
    const savedFood = await newFood.save();
    return savedFood;
  }catch(error){
    throw error
  }
}

const deleteFood = async(foodId)=>{
  try{
    const food = await Food.findByIdAndDelete(foodId);
    if(!food){
      throw new Error("Incorrect ID no food found")
    }
    return food;
  }catch(error){
    throw error
  }
}

module.exports = {getAllFoods,createFood,deleteFood};