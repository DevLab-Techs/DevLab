import { getExperiences } from "@/lib/data/experiences";

type Experience = {
  _id: string;
  title?: string;
  year: number;
  description: string;
};

const ExperiencesCard = async () => {
  const experiences = await getExperiences();

  return (
    <div className="flex flex-col justify-start self-stretch space-y-4">
      {experiences.map((exp: Experience) => (
        <div key={exp._id}>
          <h1 className="text-primary text-lg font-bold sm:text-xl">
            {exp.year}
          </h1>
          {exp.title && (
            <h2 className="sm:text-xl text-lg font-bold">{exp.title}</h2>
          )}
          <p className="tracking-wider text-sx sm:text-base">
            {exp.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExperiencesCard;
