import express from 'express';
import { signup, login } from '../controllers/authController.js';

const router = express.Router();

// Signup route
router.post('/api/signup', signup);

// Login route
router.post('/api/login', login);

export default router;
