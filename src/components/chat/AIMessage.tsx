import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { MessageProps } from '../../types/chat';
import { textGlowStyle } from '../../utils/animations';
import { AnimatedWords } from './AnimatedWords';
import { GlitchText } from '../loading/GlitchText';

export function AIMessage({ content, isLoading }: MessageProps) {
  const isError = content.includes('API key');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center px-8 max-w-5xl mx-auto relative min-h-[200px]"
    >
      <AnimatePresence>
        {isLoading ? (
          <GlitchText isVisible={isLoading} />
        ) : isError ? (
          <div className="flex flex-col items-center gap-4">
            <AlertCircle className="w-8 h-8 text-yellow-500" />
            <p className="text-xl text-yellow-500">{content}</p>
          </div>
        ) : (
          <AnimatedWords 
            text={content}
            className="ai-message text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            style={textGlowStyle}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}