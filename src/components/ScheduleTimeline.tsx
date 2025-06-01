
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Mic, Users, Calendar, Play } from 'lucide-react';

const ScheduleTimeline = () => {
  const scheduleData = [
    {
      time: "06:00",
      title: "AI Wake-Up Call",
      voice: "AI Emma",
      category: "Morning",
      duration: "30 min",
      description: "Gentle wake-up content with weather and positive vibes",
      color: "from-orange-400 to-pink-500",
      isLive: false
    },
    {
      time: "07:00",
      title: "Morning News Digest",
      voice: "AI Dave",
      category: "News",
      duration: "60 min",
      description: "AI-curated news from around the world",
      color: "from-red-400 to-rose-500",
      isLive: false
    },
    {
      time: "09:00",
      title: "Community Voices",
      voice: "AI Sarah",
      category: "Community",
      duration: "90 min",
      description: "Your submitted messages and shoutouts",
      color: "from-green-400 to-emerald-500",
      isLive: true
    },
    {
      time: "12:00",
      title: "Midday Motivation",
      voice: "AI Marcus",
      category: "Inspiration",
      duration: "45 min",
      description: "Inspirational content for your lunch break",
      color: "from-blue-400 to-cyan-500",
      isLive: false
    },
    {
      time: "15:00",
      title: "Tech Talk Tuesday",
      voice: "AI Dave",
      category: "Tech",
      duration: "60 min",
      description: "Latest in AI and technology",
      color: "from-purple-400 to-violet-500",
      isLive: false
    },
    {
      time: "18:00",
      title: "Evening Reflections",
      voice: "AI Emma",
      category: "Wellness",
      duration: "75 min",
      description: "Mindfulness and reflection to end your day",
      color: "from-indigo-400 to-blue-500",
      isLive: false
    },
    {
      time: "21:00",
      title: "Night Owl Sessions",
      voice: "AI Sarah",
      category: "Ambient",
      duration: "120 min",
      description: "Relaxing content and ambient sounds",
      color: "from-gray-400 to-slate-500",
      isLive: false
    }
  ];

  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black/40 backdrop-blur-md rounded-xl p-8 border border-white/20"
    >
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <Calendar className="w-6 h-6 mr-3 text-blue-400" />
            Today's Schedule
          </h2>
          <div className="flex items-center text-blue-300">
            <Clock className="w-5 h-5 mr-2" />
            Current Time: {currentTime}
          </div>
        </div>
        <p className="text-blue-200">All times are in your local timezone</p>
      </div>

      <div className="space-y-6">
        {scheduleData.map((segment, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative p-6 rounded-xl border ${
              segment.isLive 
                ? 'bg-green-500/20 border-green-400 shadow-lg shadow-green-500/20' 
                : 'bg-white/5 border-white/10'
            }`}
          >
            {/* Live indicator */}
            {segment.isLive && (
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                <motion.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-3 h-3 bg-red-500 rounded-full"
                />
                <span className="text-red-400 font-medium text-sm uppercase tracking-wide">
                  Live Now
                </span>
              </div>
            )}

            <div className="flex items-start space-x-6">
              {/* Time and Voice Avatar */}
              <div className="flex-shrink-0 text-center">
                <div className="text-2xl font-bold text-white mb-2">{segment.time}</div>
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${segment.color} flex items-center justify-center mb-2`}>
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-blue-200">{segment.voice}</div>
              </div>

              {/* Content Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold text-white">{segment.title}</h3>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    {segment.category}
                  </span>
                  <span className="text-gray-400 text-sm">{segment.duration}</span>
                </div>
                <p className="text-blue-200 mb-4">{segment.description}</p>
                
                {segment.isLive && (
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
                      <Play className="w-4 h-4" />
                      <span>Listen Now</span>
                    </button>
                    <span className="text-green-300 text-sm flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      1,247 listeners
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tomorrow Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10"
      >
        <h3 className="text-xl font-bold text-white mb-4">Coming Tomorrow</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white/5 rounded-lg">
            <h4 className="font-semibold text-blue-300">AI Music Wednesday</h4>
            <p className="text-sm text-gray-300">AI-generated music and sound exploration</p>
          </div>
          <div className="p-4 bg-white/5 rounded-lg">
            <h4 className="font-semibold text-blue-300">Global Voices</h4>
            <p className="text-sm text-gray-300">Multilingual content from around the world</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ScheduleTimeline;
