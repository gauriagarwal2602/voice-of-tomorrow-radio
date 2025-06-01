
import React from 'react';
import { motion } from 'framer-motion';
import { useAudio } from '@/contexts/AudioContext';

const AudioVisualizer = () => {
  const { isPlaying } = useAudio();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black/40 backdrop-blur-md rounded-xl p-8 border border-white/20 h-48 flex items-center justify-center"
    >
      <div className="flex items-center justify-center space-x-2">
        {Array.from({ length: 64 }, (_, i) => (
          <motion.div
            key={i}
            className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-full"
            style={{ width: '4px' }}
            animate={{
              height: isPlaying 
                ? [10, Math.random() * 80 + 20, 10]
                : 10,
              opacity: isPlaying ? [0.3, 1, 0.3] : 0.3,
            }}
            transition={{
              duration: 0.3 + Math.random() * 0.5,
              repeat: isPlaying ? Infinity : 0,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default AudioVisualizer;
