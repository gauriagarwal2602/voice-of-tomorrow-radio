
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Mic, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import FeaturedSegments from '@/components/FeaturedSegments';

const Landing = () => {
  const features = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "AI-Powered Voices",
      description: "Experience diverse AI voices bringing content to life 24/7"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-Time Broadcasting",
      description: "Live streaming with dynamic content generation"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Driven",
      description: "Submit your messages to be featured on-air"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 relative overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Virtual AI Radio
              </h1>
              <p className="text-2xl md:text-3xl text-blue-200 mb-8 font-light">
                Broadcasting Voices of AI 24/7
              </p>
              <p className="text-lg text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                Experience the future of radio with AI-generated content, real-time voice synthesis, 
                and community-driven programming that never stops.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-16"
            >
              <Link to="/listen">
                <Button size="lg" className="text-lg px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <Play className="w-6 h-6 mr-3" />
                  Listen Live
                </Button>
              </Link>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid md:grid-cols-3 gap-8 mb-16"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                >
                  <div className="text-blue-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-blue-200">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Segments */}
        <FeaturedSegments />

        {/* Footer */}
        <footer className="text-center py-12 text-blue-200 border-t border-white/10">
          <p>&copy; 2024 Virtual AI Radio Station. Powered by AI Innovation.</p>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
