"use server";

import { unstable_noStore as noStore } from "next/cache";

import { handleError } from "@/lib/utils";
import Testimonial from "@/lib/models/testimonial";
import { connectToDatabase } from "@/lib/db/mongoose";

export const getTestimonials = async () => {
  noStore();

  try {
    await connectToDatabase();

    const testimonials = await Testimonial.find();

    return JSON.parse(JSON.stringify(testimonials));
  } catch (error) {
    handleError(error);
  }
};
