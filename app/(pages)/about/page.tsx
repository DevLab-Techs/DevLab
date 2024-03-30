import type { Metadata } from "next";

import AboutCard from "@/components/shared/about-card";
import NavButtons from "@/components/shared/nav-buttons";
import { abouts } from "@/lib/constants";
import {
  MotionDiv,
  MotionSection,
  aboutVariants,
  cardVariants,
} from "@/lib/motion";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover DevLab Tech - a leading software company specializing in innovative full stack solutions. Our dedicated team harnesses a diverse toolkit of cutting-edge technologies and libraries, including React.js, Node.js, Next.js, and more. Learn about our mission, values, and the expertise behind our seamless integration of front-end and back-end technologies, delivering tailored solutions that exceed client expectations.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <MotionSection
      variants={aboutVariants}
      initial="hide"
      animate="show"
      className="min-h-full flex flex-col gap-4 md:gap-20 justify-evenly
    items-center pb-4 py-10 sm:py-16 px-8"
    >
      <h1 className="main-heading">
        We Know That <span className="text-primary">Good Development</span>{" "}
        Means <span className="text-primary">Good Business</span>
      </h1>
      <div
        className="flex max-w-full gap-10 overflow-y-hidden overflow-x-auto
      add-scrollbar py-4 sm:px-4"
      >
        {abouts.map((about) => (
          <MotionDiv variants={cardVariants} key={about.title}>
            <AboutCard {...about} />
          </MotionDiv>
        ))}
      </div>
      <NavButtons
        firstLink="/"
        firstTitle="Home"
        secondLink="/works"
        secondTitle="Works"
      />
    </MotionSection>
  );
}
