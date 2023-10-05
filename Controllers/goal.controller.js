const { getAllGoals, createGoal, deleteGoal } = require("../Queries/goal.queries.js");

const getAllGoalsController = async (req, res) => {
  try {
    const goals = await getAllGoals();
    res.status(200).json({ messsage: "Fetched all goals", goals })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createGoalController = async (req, res) => {
  const { body } = req;
  try {
    const goal = await createGoal(body);
    res.status(200).json({ messsage: "Goal created", goal })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteGoalController = async (req, res) => {
  const { goalId } = req.params;
  try {
    const goal = await deleteGoal(goalId);
    res.status(200).json({ messsage: "Goal deleted", goal })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { getAllGoalsController, createGoalController, deleteGoalController };
