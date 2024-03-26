import { Schema, model, models } from "mongoose";

const TestimonialSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    require: true,
  },
  feedback: {
    type: String,
    require: true,
  },
});

const Testimonial =
  models?.Testimonial || model("Testimonial", TestimonialSchema);

export default Testimonial;
