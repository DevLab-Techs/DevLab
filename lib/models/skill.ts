import { Schema, model, models } from "mongoose";

const SkillSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Skill = models?.Skill || model("Skill", SkillSchema);

export default Skill;
