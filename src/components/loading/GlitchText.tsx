import React from 'react';
import { motion } from 'framer-motion';
import { LOADING_WORDS } from '../../utils/constants';

interface GlitchTextProps {
  isVisible: boolean;
}

export function GlitchText({ isVisible }: GlitchTextProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
      exit="exit"
      className="absolute inset-0 flex items-center justify-center"
    >
      {LOADING_WORDS.map((word, index) => (
        <LoadingWord
          key={word.text}
          text={word.text}
          color={word.color}
          delay={index * 0.2}
        />
      ))}
    </motion.div>
  );
}

interface LoadingWordProps {
  text: string;
  color: string;
  delay: number;
}

function LoadingWord({ text, color, delay }: LoadingWordProps) {
  const wordVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.8,
      filter: 'blur(10px)',
    },
    show: {
      opacity: [0, 1, 1, 0],
      y: [20, 0, 0, -20],
      scale: [0.8, 1.2, 1.2, 0.8],
      filter: ['blur(10px)', 'blur(0px)', 'blur(0px)', 'blur(10px)'],
      transition: {
        duration: 2,
        times: [0, 0.3, 0.7, 1],
        repeat: Infinity,
        delay,
      },
    },
  };

  return (
    <motion.span
      variants={wordVariants}
      className={`text-4xl font-bold mx-4 ${color} filter drop-shadow-glow`}
      style={{
        textShadow: `0 0 10px currentColor`,
      }}
    >
      {text}
    </motion.span>
  );
}