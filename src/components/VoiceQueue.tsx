
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Mic } from 'lucide-react';

const VoiceQueue = () => {
  const queueItems = [
    {
      id: '1',
      title: 'Morning News Update',
      voice: 'AI Dave',
      category: 'News',
      timeToAir: '2:30',
      snippet: 'Latest updates on technology and AI...'
    },
    {
      id: '2',
      title: 'Community Shoutout',
      voice: 'AI Emma',
      category: 'Shoutout',
      timeToAir: '5:45',
      snippet: 'Happy birthday message from Sarah...'
    },
    {
      id: '3',
      title: 'Daily Inspiration',
      voice: 'AI Sarah',
      category: 'Inspiration',
      timeToAir: '8:15',
      snippet: 'Today\'s motivational thought...'
    },
    {
      id: '4',
      title: 'Tech Fun Fact',
      voice: 'AI Marcus',
      category: 'Fun Fact',
      timeToAir: '10:30',
      snippet: 'Did you know that quantum computers...'
    }
  ];

  const recentHistory = [
    {
      id: 'h1',
      title: 'Welcome Message',
      voice: 'AI Emma',
      playedAt: '5 min ago'
    },
    {
      id: 'h2',
      title: 'Traffic Update',
      voice: 'AI Dave',
      playedAt: '12 min ago'
    },
    {
      id: 'h3',
      title: 'Weather Report',
      voice: 'AI Sarah',
      playedAt: '18 min ago'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Upcoming Queue */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/20"
      >
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Clock className="w-5 h-5 mr-2 text-blue-400" />
          Coming Up
        </h3>
        
        <div className="space-y-4">
          {queueItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                <span className="text-blue-300 text-xs font-mono">{item.timeToAir}</span>
              </div>
              
              <div className="flex items-center space-x-2 mb-2">
                <Mic className="w-3 h-3 text-blue-400" />
                <span className="text-blue-200 text-xs">{item.voice}</span>
                <span className="text-gray-400 text-xs">•</span>
                <span className="text-gray-400 text-xs">{item.category}</span>
              </div>
              
              <p className="text-gray-300 text-xs truncate">{item.snippet}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent History */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/20"
      >
        <h3 className="text-xl font-bold text-white mb-4">Recently Played</h3>
        
        <div className="space-y-3">
          {recentHistory.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="p-3 bg-white/5 rounded-lg border border-white/10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-white text-sm">{item.title}</h4>
                  <p className="text-blue-200 text-xs">{item.voice}</p>
                </div>
                <span className="text-gray-400 text-xs">{item.playedAt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default VoiceQueue;
