"use client";

import { Variants, motion } from "framer-motion";

export const MotionHeader = motion.header;
export const MotionFooter = motion.footer;
export const MotionSection = motion.section;
export const MotionSpan = motion.span;
export const MotionDiv = motion.div;
export const MotionH1 = motion.h1;
export const MotionP = motion.p;
export const MotionA = motion.a;

// Layout Variants
export const navbarVariants: Variants = {
  hide: {
    y: -100,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  show: {
    y: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

export const footerVariants: Variants = {
  hide: {
    x: 200,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  show: {
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

export const mobileFooterVariants: Variants = {
  hide: {
    y: 100,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  show: {
    y: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

// Card Variants
export const cardVariants: Variants = {
  hide: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
  },
};

// NavButtons Variants
export const navButtonsVariants: Variants = {
  hover: {
    scale: 1.2,
    transition: {
      type: "tween",
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

// Home Variants
export const homeVariants: Variants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  exit: {
    scale: 0,
    rotate: 180,
    transition: {
      duration: 0.5,
    },
  },
};

export const circleVariants: Variants = {
  hide: {
    opacity: 0,
  },
  show: {
    scale: [1, 2, 2, 3, 1],
    opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
    transition: {
      duration: 2.5,
    },
  },
};

// About Variants
export const aboutVariants: Variants = {
  hide: {
    opacity: 0,
    x: "100vw",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.3,
      duration: 0.7,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: 0.5,
    },
  },
};

// Works Variants
export const worksVariants: Variants = {
  hide: {
    opacity: 0,
    x: "-100vw",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      // when: "beforeChildren",
      // staggerChildren: 0.3,
      duration: 0.7,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: 0.5,
    },
  },
};

export const worksCardBackdropVariants: Variants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      // when: "beforeChildren",
      // staggerChildren: 0.3,
      duration: 0.3,
    },
  },
};

export const linkHoverVariants: Variants = {
  hide: {
    scale: [0.9, 0.7, 1],
  },
  hover: {
    scale: [1, 0.9],
  },
};

// Skills Variants
export const skillsFirstVariant: Variants = {
  hide: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: [0, 1, 1],
    x: [-250, -180, 0],
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const skillsSecondVariant: Variants = {
  hide: {
    opacity: 0,
    x: 200,
  },
  show: {
    opacity: [0, 1, 1],
    x: [250, 180, 0],
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const experienceVariants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

// Contact Variants
export const contactVariants = {
  hide: {},
  show: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

export const formVariants = {
  hide: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
    },
  },
  exit: {
    opacity: 0,
    y: 50,
  },
};
