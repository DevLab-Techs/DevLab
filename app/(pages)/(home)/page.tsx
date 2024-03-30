import Image from "next/image";

import Circles from "@/components/shared/circles";
import NavButtons from "@/components/shared/nav-buttons";
import MainHeading from "@/components/shared/main-heading";
import { MotionSection, homeVariants } from "@/lib/motion";

export default function Home() {
  return (
    <MotionSection
      variants={homeVariants}
      initial="hide"
      animate="show"
      className="min-h-full flex flex-col gap-4 md:gap-10 justify-center items-center"
    >
      <div>
        <Image
          src="/icon.svg"
          width={100}
          height={153.53}
          alt="Icon"
          title="DevLab"
          className="w-16 md:w-24"
        />
      </div>
      <MainHeading />
      <div className="absolute bottom-20">
        <NavButtons secondLink="/about" secondTitle="About" />
      </div>
      <Circles />
    </MotionSection>
  );
}
