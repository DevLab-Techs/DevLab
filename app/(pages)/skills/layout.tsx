import NavButtons from "@/components/shared/nav-buttons";
import SkillsCard from "@/components/shared/skills-card";

const SkillsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className="min-h-full flex flex-col gap-4 md:gap-20 justify-evenly
  items-center pb-4 py-10 sm:py-16 px-8"
    >
      <h1 className="main-heading">
        Skills <span className="text-primary">&</span> Experience
      </h1>
      <div className="flex w-full gap-8 flex-col md:flex-row justify-evenly items-center">
        <SkillsCard />
        {children}
      </div>
      <NavButtons
        firstLink="/works"
        firstTitle="Works"
        secondLink="/contact"
        secondTitle="Contact"
      />
    </section>
  );
};

export default SkillsLayout;
