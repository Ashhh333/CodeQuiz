import Problem from '../models/problemsModel.js';
import { v4 as uuidv4 } from 'uuid';

// Create a new problem
export const createProblem = async (req, res) => {
  try {
    const { ProblemName, description, inputFormat, outputFormat, testCases } = req.body;
    const uniqueId = uuidv4();

    const newProblem = new Problem({
      id: uniqueId,
      ProblemName,
      description,
      inputFormat,
      outputFormat,
      testCases,
    });

    await newProblem.save();
    res.json({ link: `http://localhost:5173/problem/${uniqueId}` });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to create the problem' });
  }
};

// Fetch a single problem by ID
export const getProblemById = async (req, res) => {
  try {
    const problem = await Problem.findOne({ id: req.params.id });
    if (problem) {
      res.json(problem);
    } else {
      res.status(404).json({ error: 'Problem not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch the problem' });
  }
};
