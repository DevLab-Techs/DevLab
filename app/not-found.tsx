import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The page you are looking does not exist.",
};

import NavButtons from "@/components/shared/nav-buttons";

const NotFound = () => {
  return (
    <section
      className="min-h-full flex flex-col gap-4 md:gap-20 justify-evenly
  items-center pb-4 py-10 sm:py-16 px-8"
    >
      <h1 className="main-heading">
        Error <span className="text-primary">404</span> Page Not Found!
      </h1>

      <h1>
        The page you are looking for doesn&apos;t exist. Please navigate to the
        homepage.
      </h1>

      <NavButtons firstLink="/" firstTitle="Home" />
    </section>
  );
};

export default NotFound;
