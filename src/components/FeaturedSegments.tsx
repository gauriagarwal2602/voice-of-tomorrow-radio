
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mic, Users, Clock } from 'lucide-react';

const FeaturedSegments = () => {
  const segments = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "AI Morning News",
      time: "7:00 AM - 9:00 AM",
      voice: "AI Dave",
      description: "Start your day with AI-curated news and updates"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Voices",
      time: "12:00 PM - 2:00 PM",
      voice: "AI Emma",
      description: "Your messages and shoutouts brought to life"
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Evening Reflections",
      time: "7:00 PM - 9:00 PM",
      voice: "AI Sarah",
      description: "Inspirational content to end your day"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Late Night AI",
      time: "10:00 PM - 12:00 AM",
      voice: "AI Marcus",
      description: "Relaxing content and ambient soundscapes"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Segments
          </h2>
          <p className="text-xl text-blue-200">
            Discover our AI-powered programming lineup
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center"
            >
              <div className="text-blue-400 mb-4 flex justify-center">
                {segment.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{segment.title}</h3>
              <p className="text-blue-300 font-medium mb-2">{segment.time}</p>
              <p className="text-purple-300 text-sm mb-3">Voiced by {segment.voice}</p>
              <p className="text-blue-200 text-sm">{segment.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSegments;
