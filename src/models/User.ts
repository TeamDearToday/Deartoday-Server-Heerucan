import mongoose from "mongoose";
import { UserInfo } from "../interfaces/user/UserInfo";

const UserSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  social: {
    type: String,
    required: true,
  },
});

export default mongoose.model<UserInfo & mongoose.Document>("User", UserSchema);
