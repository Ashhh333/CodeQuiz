import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import authRoutes from './routes/authRoutes.js';
import problemRoutes from './routes/problemRoutes.js';

// Initialize environment variables
dotenv.config();

// Initialize the app
const app = express();

// Connect to the database
connectDB();

// Use middleware
app.use(express.json());

// Use routes
app.use(authRoutes);
app.use(problemRoutes);

// Root route (optional)
app.get('/', (req, res) => {
  res.send('Hello, CodeQuiz!');
});

// Set port and start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
