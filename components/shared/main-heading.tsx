"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

const MainHeading = () => {
  const [text, count] = useTypewriter({
    words: ["Software Company", "Full Stack Developers", "Freelancers"],
    loop: 0,
    delaySpeed: 2000,
  });

  return (
    <h1 className="main-heading">
      Welcome To DevLab CO. 👋 <br />
      <span className="text-primary">{text}</span>
      <Cursor cursorColor="#6d28d9" />
    </h1>
  );
};

export default MainHeading;
