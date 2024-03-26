import { getWorks } from "@/lib/data/works";
import WorksCard from "./works-card";

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
      className="add-scrollbar flex max-w-full overflow-x-auto
gap-3 sm:gap-5 pb-4"
    >
      {works.map((work: Work) => (
        <WorksCard key={work._id} work={work} />
      ))}
    </div>
  );
};

export default WorksSlider;
