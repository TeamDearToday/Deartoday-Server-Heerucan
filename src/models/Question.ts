import mongoose from "mongoose";
import { QuestionInfo } from "../interfaces/question/QuestionInfo";

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
});

export default mongoose.model<QuestionInfo & mongoose.Document>(
  "Question",
  QuestionSchema
);
