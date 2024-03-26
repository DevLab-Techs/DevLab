"use client";

import { motion } from "framer-motion";

export const MotionHeader = motion.header;
export const MotionFooter = motion.footer;
export const MotionSection = motion.section;
export const MotionDiv = motion.div;
export const MotionP = motion.p;

export const navbarVariants = {
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

export const circleVariants = {
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

export const footerVariants = {
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

export const mobileFooterVariants = {
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

export const homeVariants = {
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
