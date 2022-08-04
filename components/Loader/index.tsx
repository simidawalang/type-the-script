import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="loader"
      animate={{ rotate: 360 }}
      transition={{
        loop: Infinity,
        duration: 1,
        ease: "linear",
      }}
    />
  );
};

export default Loader;
