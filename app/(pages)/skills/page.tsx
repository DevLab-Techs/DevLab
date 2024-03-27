import type { Metadata } from "next";

import ExperiencesCard from "@/components/shared/experiences-card";

export const metadata: Metadata = {
  title: "Skills",
};

export default function SkillsPage() {
  return <ExperiencesCard />;
}
