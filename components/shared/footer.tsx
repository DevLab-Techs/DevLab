import {
  MotionDiv,
  MotionFooter,
  footerVariants,
  mobileFooterVariants,
} from "@/lib/motion";

const Footer = () => {
  return (
    <MotionFooter
      variants={mobileFooterVariants}
      initial="hide"
      animate="show"
      className="md:fixed md:bottom-8 md:right-8 text-base font-bold border-t border-white/10 md:border-none"
    >
      <MotionDiv
        variants={footerVariants}
        initial="hide"
        animate="show"
        className="hidden md:block"
      >
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://devlab-tech.com"
            target="_blank"
            className="text-primary"
          >
            DevLab
          </a>
        </p>
        <p>All Rights Reserved</p>
      </MotionDiv>
      <div className="md:hidden">
        <p className="text-xs text-center p-2">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://devlab-tech.com"
            target="_blank"
            className="text-primary"
          >
            DevLab
          </a>
          , All Rights Reserved
        </p>
      </div>
    </MotionFooter>
  );
};

export default Footer;
