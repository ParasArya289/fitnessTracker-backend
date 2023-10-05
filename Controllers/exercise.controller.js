const {getAllExercises,createExercise,deleteExercise} = require("../Queries/exercise.queries.js");

const getAllExercisesController = async(req,res)=>{
  try{
    const exercises = await getAllExercises();
    res.status(200).json({messsage:"Fetched all exercies",exercises})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

const createExerciseController = async(req,res)=>{
  const {body} = req;
  try{
    const exercise = await createExercise(body);
    res.status(200).json({messsage:"Exercise created",exercise})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

const deleteExerciseController = async(req,res)=>{
  const {exerciseId} = req.params;
  try{
    const exercise = await deleteExercise(exerciseId);
    res.status(200).json({messsage:"Exercise deleted",exercise})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

module.exports = {getAllExercisesController,createExerciseController,deleteExerciseController};
