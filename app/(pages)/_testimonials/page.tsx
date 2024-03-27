import type { Metadata } from "next";

import { getTestimonials } from "@/lib/data/testimonials";
import TestimonialsCard from "@/components/shared/testimonials-card";

export const metadata: Metadata = {
  title: "Testimonials",
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  console.log(testimonials);

  return (
    <>
      <TestimonialsCard testimonials={testimonials} />
    </>
  );
}
