import { Schema, model, models } from "mongoose";

const WorkSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  projectLink: {
    type: String,
    required: true,
  },
  codeLink: String,
  images: {
    type: [String],
    required: true,
  },
  tags: [String],
});

const Work = models?.Work || model("Work", WorkSchema);

export default Work;
