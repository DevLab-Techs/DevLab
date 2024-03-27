import { getWorks } from "@/lib/data/works";
import WorksCard from "@/components/shared/works-card";
import { MotionDiv, cardVariants } from "@/lib/motion";

type Work = {
  _id: string;
  title: string;
  description: string;
  projectLink: string;
  codeLink?: string;
  images: string[];
  tags: string[];
};

const WorksSlider = async ({ tag }: { tag?: string }) => {
  const works = await getWorks(tag);

  return (
    <div
      className="add-scrollbar flex max-w-full overflow-x-auto overflow-y-hidden
gap-3 sm:gap-5 pb-4"
    >
      {works.map((work: Work, i: number) => (
        <MotionDiv variants={cardVariants} key={work._id}>
          <WorksCard work={work} />
        </MotionDiv>
      ))}
    </div>
  );
};

export default WorksSlider;
