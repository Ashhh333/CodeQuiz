import express from 'express';
import { createProblem, getProblemById } from '../controllers/problemController.js';

const router = express.Router();

// Route for creating a problem
router.post('/api/create-problem', createProblem);

// Route for getting a problem by ID
router.get('/api/problem/:id', getProblemById);

export default router;
