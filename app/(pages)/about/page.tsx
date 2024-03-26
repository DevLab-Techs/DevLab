import AboutCard from "@/components/shared/about-card";
import NavButtons from "@/components/shared/nav-buttons";
import { abouts } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section
      className="min-h-full flex flex-col gap-4 md:gap-20 justify-evenly
    items-center pb-4 py-10 sm:py-16 px-8"
    >
      <h1 className="main-heading">
        I Know That <span className="text-primary">Good Development</span> Means{" "}
        <span className="text-primary">Good Business</span>
      </h1>
      <div className="flex max-w-full gap-10 overflow-x-auto add-scrollbar py-4">
        {abouts.map((about) => (
          <AboutCard key={about.title} {...about} />
        ))}
      </div>
      <NavButtons
        firstLink="/"
        firstTitle="Home"
        secondLink="/works"
        secondTitle="Works"
      />
    </section>
  );
}
