import type { Metadata } from "next";
import { IoIosMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";

import ContactFrom from "@/components/shared/contact-form";
import NavButtons from "@/components/shared/nav-buttons";
import { Button } from "@/components/ui/button";
import Socials from "@/components/shared/socials";
import {
  MotionDiv,
  MotionH1,
  MotionSection,
  contactVariants,
  formVariants,
} from "@/lib/motion";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <MotionSection
      variants={contactVariants}
      initial="hide"
      animate="show"
      className="min-h-full flex flex-col gap-5 justify-evenly
    items-center py-6 px-8"
    >
      <MotionH1 variants={formVariants} className="main-heading">
        Take A <span className="text-primary">Coffee</span> &{" "}
        <span className="text-primary">Chat</span> With Us
      </MotionH1>
      <MotionDiv
        variants={formVariants}
        className="flex flex-col md:flex-row gap-4"
      >
        <Button
          size="contact"
          variant="contact"
          asChild
          className="min-w-[200px] sm:min-w-[360px] text-base sm:text-lg"
        >
          <a
            href="mailto:devlab.senior.tech@gmail.com"
            className="flex items-center hover:text-primary"
          >
            <IoIosMail className="text-4xl mobile:text-2xl mr-2 " />
            devlab.senior.tech@gmail.com
          </a>
        </Button>
        <Button
          size="contact"
          variant="contact"
          asChild
          className="min-w-[200px] sm:min-w-[360px] text-base sm:text-lg"
        >
          <a
            href="tel:+201069036485"
            className="flex items-center hover:text-primary"
          >
            <BsTelephoneFill className="text-4xl mobile:text-2xl mr-2" />
            (+20) 106-9036-485
          </a>
        </Button>
      </MotionDiv>
      <ContactFrom />
      <MotionDiv variants={formVariants}>
        <NavButtons firstLink="/skills" firstTitle="Skills" />
      </MotionDiv>
      <Socials />
    </MotionSection>
  );
}
