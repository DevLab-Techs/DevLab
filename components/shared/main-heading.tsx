"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

const MainHeading = () => {
  const [text, count] = useTypewriter({
    words: ["Expert Team", "Full Stack Applications", "Ready to assist you!"],
    loop: 0,
    delaySpeed: 2000,
  });

  return (
    <h1 className="main-heading">
      Welcome 👋,
      <br /> To DevLab Tech CO. <br />
      <span className="text-primary">{text}</span>
      <Cursor cursorColor="#6d28d9" />
    </h1>
  );
};

export default MainHeading;
