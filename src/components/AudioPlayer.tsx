
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useAudio } from '@/contexts/AudioContext';

const AudioPlayer = () => {
  const { isPlaying, currentTime, duration, volume, play, pause, skip, setVolume } = useAudio();

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/20"
    >
      <div className="space-y-6">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-blue-200">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <div className="relative">
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            {/* Waveform visualization */}
            <div className="absolute inset-0 flex items-center justify-center space-x-1">
              {Array.from({ length: 50 }, (_, i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-blue-400/30 rounded-full"
                  animate={{
                    height: isPlaying ? [2, Math.random() * 8 + 2, 2] : 2,
                  }}
                  transition={{
                    duration: 0.5 + Math.random() * 0.5,
                    repeat: isPlaying ? Infinity : 0,
                    repeatType: 'reverse',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              onClick={isPlaying ? pause : play}
              size="lg"
              className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6 ml-1" />
              )}
            </Button>
            
            <Button
              onClick={skip}
              variant="ghost"
              className="text-white hover:text-blue-300"
            >
              Skip
            </Button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center space-x-3">
            <Volume className="w-5 h-5 text-blue-400" />
            <div className="w-24">
              <Slider
                value={[volume * 100]}
                onValueChange={(value) => setVolume(value[0] / 100)}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AudioPlayer;
