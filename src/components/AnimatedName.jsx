import React from 'react';
import { motion } from 'framer-motion';

const AnimatedName = () => {
  const letters = "Anandhi".split('');

  return (
    <p className="text-2xl font-semibold flex gap-1 overflow-hidden">
      Hi! I'm&nbsp;
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 2,
          }}
          className="inline-block text-rose-500"
        >
          {letter}
        </motion.span>
      ))}
    </p>
  );
};

export default AnimatedName;

