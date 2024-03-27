import Image from "next/image";

import { skills } from "@/lib/constants";
import {
  MotionDiv,
  skillsFirstVariant,
  skillsSecondVariant,
} from "@/lib/motion";

const SkillsCard = () => {
  return (
    <div>
      <MotionDiv
        variants={skillsFirstVariant}
        initial="hide"
        animate="show"
        className="grid gap-3 grid-cols-5"
      >
        {skills.map((skill, i) => {
          if (i < 10)
            return (
              <div className="flex flex-col items-center" key={skill.title}>
                <div
                  className="w-10 h-10 sm:w-[70px] sm:h-[70px] flex justify-center
                items-center rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-muted
                dark:hover:bg-muted/30 transition duration-300"
                >
                  <Image
                    src={skill.image}
                    alt={skill.title}
                    width={50}
                    height={50}
                    className="w-7/12"
                  />
                </div>
                <p className="mt-1 hidden sm:block text-sm">{skill.title}</p>
              </div>
            );
        })}
      </MotionDiv>
      <MotionDiv
        variants={skillsSecondVariant}
        initial="hide"
        animate="show"
        className="grid gap-3 grid-cols-5 mt-3"
      >
        {skills.map((skill, i) => {
          if (i >= 10)
            return (
              <div className="flex flex-col items-center" key={skill.title}>
                <div
                  className="w-10 h-10 sm:w-[70px] sm:h-[70px] flex justify-center
                items-center rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-muted
                dark:hover:bg-muted/30 transition duration-300"
                >
                  <Image
                    src={skill.image}
                    alt={skill.title}
                    width={50}
                    height={50}
                    className="w-7/12"
                  />
                </div>
                <p className="mt-1 hidden sm:block text-sm">{skill.title}</p>
              </div>
            );
        })}
      </MotionDiv>
    </div>
  );
};

export default SkillsCard;
