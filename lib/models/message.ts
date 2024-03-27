import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Message = models?.Message || model("Message", MessageSchema);

export default Message;
