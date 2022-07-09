import { CommonMediaFields } from "../common/CommonMediaFields";
import { MessageInfo } from "../message/MessageInfo";
import mongoose from "mongoose";

export interface TimeTravelInfo extends CommonMediaFields {
  title: string;
  message: MessageInfo[];
}
