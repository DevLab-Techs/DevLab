import type { Metadata } from "next";

import WorksSlider from "@/components/shared/works-slider";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Explore the impressive portfolio of projects executed by DevLab Tech. From dynamic web applications to robust software solutions, delve into our works to witness firsthand the expertise and creativity we bring to every project.",
  alternates: {
    canonical: "/works",
  },
};

export default function WorksPage({
  searchParams: { tag },
}: {
  searchParams: { tag: string };
}) {
  return <WorksSlider tag={tag} />;
}
