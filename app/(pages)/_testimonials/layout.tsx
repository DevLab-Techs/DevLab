import NavButtons from "@/components/shared/nav-buttons";

const TestimonialsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className="min-h-full flex flex-col gap-4 md:gap-10 justify-evenly
items-center py-10 md:py-20 px-8"
    >
      <h1 className="main-heading">
        It Was a Great <span className="text-primary">Honor</span> To Work With
        You
      </h1>
      {children}
      <NavButtons
        firstLink="/skills"
        firstTitle="Skills"
        secondLink="/contact"
        secondTitle="Contact"
      />
    </section>
  );
};

export default TestimonialsLayout;
