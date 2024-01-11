const Food = require("../Models/food.model.js");

const getAllFoods = async()=>{
  try{
    const Foods = await Food.find().sort({_id: -1});
    return Foods;
  }catch(error){
    throw new Error("Unable to fetch foods")
  }
}

const createFood = async(data)=>{
  try{
    const newFood = new Food(data)
    const savedFood = await newFood.save();
    return await getAllFoods();
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
    return await getAllFoods();
  }catch(error){
    throw error
  }
}

module.exports = {getAllFoods,createFood,deleteFood};