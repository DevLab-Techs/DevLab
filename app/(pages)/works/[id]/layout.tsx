import NavButtons from "@/components/shared/nav-buttons";

const WorkDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section
        className="min-h-full flex flex-col gap-4 md:gap-10 justify-evenly
  items-center py-4 sm:py-8 px-8"
      >
        {children}
        <NavButtons firstLink="/works" firstTitle="Works" />
      </section>
    </>
  );
};

export default WorkDetailsLayout;
