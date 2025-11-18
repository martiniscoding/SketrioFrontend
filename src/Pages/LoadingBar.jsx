import React, { useState } from "react";
import { motion } from "motion/react";

function LoadingBar() {
  const [showDot, setshowDot] = useState(false);

  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const childrenVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 2 },
  };

  return (
    <div className="mt-30 flex">
      <button
        onClick={() => setshowDot(!showDot)}
        className="bg-red-300 px-3 py-1 rounded text-sm"
      >
        click here
      </button>

      <motion.div
        variants={parentVariant}
        initial="hidden"
        animate={showDot ? "visible" : "hidden"}
        className="flex gap-10 mt-20"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            variants={childrenVariant}
            className="rounded-full size-5 bg-yellow-300"
          />
        ))}
      </motion.div>
    </div>
  );
}

export default LoadingBar;
