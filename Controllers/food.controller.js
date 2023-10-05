const {getAllFoods,createFood,deleteFood} = require("../Queries/food.queries.js");

const getAllFoodsController = async(req,res)=>{
  try{
    const foods = await getAllFoods();
    res.status(200).json({messsage:"Fetched all foods",foods})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

const createFoodController = async(req,res)=>{
  const {body} = req;
  try{
    const food = await createFood(body);
    res.status(200).json({messsage:"Food created",food})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

const deleteFoodController = async(req,res)=>{
  const {foodId} = req.params;
  try{
    const food = await deleteFood(foodId);
    res.status(200).json({messsage:"Food deleted",food})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

module.exports = {getAllFoodsController,createFoodController,deleteFoodController};
