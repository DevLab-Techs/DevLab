import type { Metadata } from "next";

import WorksSlider from "@/components/shared/works-slider";

export const metadata: Metadata = {
  title: "Works",
};

export default function WorksPage({
  searchParams: { tag },
}: {
  searchParams: { tag: string };
}) {
  return <WorksSlider tag={tag} />;
}
