const express = require("express");
const fitnessRouter = express.Router();
const {getAllExercisesController,createExerciseController,deleteExerciseController} = require("../Controllers/exercise.controller.js");
const {getAllFoodsController,createFoodController,deleteFoodController} = require("../Controllers/food.controller.js");
const { getAllGoalsController, createGoalController, deleteGoalController } = require("../Controllers/goal.controller.js");

fitnessRouter.get("/exercises",getAllExercisesController)
fitnessRouter.post("/exercises",createExerciseController)
fitnessRouter.delete("/exercises/:exerciseId",deleteExerciseController)

fitnessRouter.get("/foods",getAllFoodsController)
fitnessRouter.post("/foods",createFoodController)
fitnessRouter.delete("/foods/:foodId",deleteFoodController)

fitnessRouter.get("/goals",getAllGoalsController)
fitnessRouter.post("/goals",createGoalController)
fitnessRouter.delete("/goals/:goalId",deleteGoalController)

module.exports = fitnessRouter;