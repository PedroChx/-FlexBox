import {
  Schema,
  model
} from "mongoose";

const schema = new Schema({
  senderName: {
    type: String,
    required: true,
  },
  senderRol: {
    type: String,
    required: true,
  },
  receiverName: {
    type: String,
    required: true,
  },
  receiverRol: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  }
}, {
  timestamps: true,
});

export default model("Noti", schema);