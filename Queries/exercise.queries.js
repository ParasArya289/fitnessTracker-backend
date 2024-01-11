const Exercise = require("../Models/exercise.model.js");

const getAllExercises = async () => {
  try {
    const exercises = await Exercise.find().sort({_id: -1});
    return exercises;
  } catch (error) {
    throw new Error("Unable to fetch exercises")
  }
}

const createExercise = async (data) => {
  try {
    const newExercise = new Exercise(data)
    const savedExercise = await newExercise.save();
    return await getAllExercises();
  } catch (error) {
    throw error
  }
}

const deleteExercise = async (exerciseId) => {
  try {
    const exercise = await Exercise.findByIdAndDelete(exerciseId);
    if (!exercise) {
      throw new Error("Incorrect ID no exercise found")
    }
    return await getAllExercises();
  } catch (error) {
    throw error
  }
}

module.exports = { getAllExercises, createExercise, deleteExercise };