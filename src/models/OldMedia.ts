import mongoose from "mongoose";
import { OldMediaInfo } from "../interfaces/oldmedia/OldMediaInfo";

const OldMediaSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export default mongoose.model<OldMediaInfo & mongoose.Document>(
  "OldMedia",
  OldMediaSchema
);
