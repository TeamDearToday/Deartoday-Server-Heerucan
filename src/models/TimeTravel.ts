import mongoose from "mongoose";
import { TimeTravelInfo } from "../interfaces/timetavel/TimeTravelInfo";
import Message from "./Message";

const TimeTravelSchema = new mongoose.Schema({
  question: {
    type: Message,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export default mongoose.model<TimeTravelInfo & mongoose.Document>(
  "TimeTravel",
  TimeTravelSchema
);
