"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const MotionProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {/* <React.Fragment key={`${pathname}`}> */}
      {children}
      {/* </React.Fragment> */}
    </AnimatePresence>
  );
};

export default MotionProvider;
