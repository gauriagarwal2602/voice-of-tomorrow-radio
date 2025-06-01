
import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Clock } from 'lucide-react';
import { useAudio } from '@/contexts/AudioContext';

const NowPlaying = () => {
  const { nowPlaying } = useAudio();

  if (!nowPlaying) return null;

  const getVoiceAvatar = (voice: string) => {
    const colors = {
      'AI Emma': 'from-pink-400 to-rose-500',
      'AI Dave': 'from-blue-400 to-cyan-500',
      'AI Sarah': 'from-green-400 to-emerald-500',
      'AI Marcus': 'from-purple-400 to-violet-500',
    };
    return colors[voice as keyof typeof colors] || 'from-gray-400 to-gray-500';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'News': 'bg-red-500/20 text-red-300',
      'Welcome': 'bg-blue-500/20 text-blue-300',
      'Shoutout': 'bg-green-500/20 text-green-300',
      'Inspiration': 'bg-purple-500/20 text-purple-300',
      'Fun Fact': 'bg-yellow-500/20 text-yellow-300',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/20 text-gray-300';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-black/40 backdrop-blur-md rounded-xl p-8 border border-white/20"
    >
      <div className="flex items-start space-x-6">
        {/* Voice Avatar */}
        <motion.div
          animate={{ 
            boxShadow: [
              '0 0 20px rgba(59, 130, 246, 0.5)',
              '0 0 40px rgba(139, 92, 246, 0.5)',
              '0 0 20px rgba(59, 130, 246, 0.5)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className={`w-20 h-20 rounded-full bg-gradient-to-br ${getVoiceAvatar(nowPlaying.voice)} flex items-center justify-center flex-shrink-0`}
        >
          <Mic className="w-8 h-8 text-white" />
        </motion.div>

        {/* Content Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-3 mb-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(nowPlaying.category)}`}>
              {nowPlaying.category}
            </span>
            <div className="flex items-center text-blue-200 text-sm">
              <Clock className="w-4 h-4 mr-1" />
              {nowPlaying.timestamp}
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-2 truncate">
            {nowPlaying.title}
          </h2>
          
          <p className="text-blue-200 text-lg">
            Voiced by <span className="font-semibold text-blue-300">{nowPlaying.voice}</span>
          </p>
        </div>

        {/* Live Indicator */}
        <div className="flex items-center space-x-2">
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-3 h-3 bg-red-500 rounded-full"
          />
          <span className="text-red-400 font-medium text-sm uppercase tracking-wide">
            Live
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default NowPlaying;
