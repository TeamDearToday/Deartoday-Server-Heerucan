import mongoose from "mongoose";
import { MessageInfo } from "../interfaces/message/MessageInfo";
import Question from "./Question";

const MessageSchema = new mongoose.Schema({
  question: {
    type: mongoose.Types.ObjectId,
    ref: "Question",
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

export default mongoose.model<MessageInfo & mongoose.Document>(
  "Message",
  MessageSchema
);
