import mongoose from 'mongoose';

const problemSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  ProblemName: { type: String, required: true },
  description: { type: String, required: true },
  inputFormat: { type: String, required: true },
  outputFormat: { type: String, required: true },
  testCases: [
    {
      input: { type: String, required: true },
      expectedOutput: { type: String, required: true },
    },
  ],
});

const Problem = mongoose.model('Problem', problemSchema);

export default Problem;
