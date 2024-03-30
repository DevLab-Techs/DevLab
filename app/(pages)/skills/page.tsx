import type { Metadata } from "next";

import ExperiencesCard from "@/components/shared/experiences-card";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Discover the depth of expertise and experience offered by DevLab Tech. With proficiency across the full stack, our team excels in front-end and back-end technologies, ensuring comprehensive solutions that meet the diverse needs of our clients.",
  alternates: {
    canonical: "/skills",
  },
};

export default function SkillsPage() {
  return <ExperiencesCard />;
}
