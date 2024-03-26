import { MotionDiv, circleVariants } from "@/lib/motion";

const Circles = () => {
  return (
    <>
      <MotionDiv
        variants={circleVariants}
        initial="hide"
        animate="show"
        className="absolute -z-10 border border-black/50 dark:border-border
      w-[250px] h-[250px]  md:w-[500px] md:h-[500px] rounded-full"
      />
      <MotionDiv
        variants={circleVariants}
        initial="hide"
        animate="show"
        className="absolute -z-10 border opacity-20 animate-pulse border-black/50
      dark:border-border w-[300px] h-[300px] md:w-[650px] md:h-[650px] rounded-full"
      />
      <MotionDiv
        variants={circleVariants}
        initial="hide"
        animate="show"
        className="absolute -z-10 border border-black/50 dark:border-border
      w-[350px] h-[350px] md:w-[800px] md:h-[800px] rounded-full"
      />
    </>
  );
};

export default Circles;
