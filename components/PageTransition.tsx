"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

const PageTransition = ({ children }: Props) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-background top-0 pointer-events-none"
        ></motion.div>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
