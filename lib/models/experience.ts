import { Schema, model, models } from "mongoose";

const ExperienceSchema = new Schema({
  year: {
    type: Number,
    required: true,
  },
  title: String,
  description: {
    type: String,
    required: true,
  },
});

const Experience = models?.Experience || model("Experience", ExperienceSchema);

export default Experience;
