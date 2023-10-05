const Goal = require("../Models/goal.model.js");

const getAllGoals = async()=>{
  try{
    const Goals = await Goal.find();
    return Goals;
  }catch(error){
    throw new Error("Unable to fetch goals")
  }
}

const createGoal = async(data)=>{
  try{
    const newGoal = new Goal(data)
    const savedGoal = await newGoal.save();
    return savedGoal;
  }catch(error){
    throw error
  }
}

const deleteGoal = async(goalId)=>{
  try{
    const goal = await Goal.findByIdAndDelete(goalId);
    if(!goal){
      throw new Error("Incorrect ID no goal found")
    }
    return goal;
  }catch(error){
    throw error
  }
}

module.exports = {getAllGoals,createGoal,deleteGoal};