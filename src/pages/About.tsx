
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import VoiceProfiles from '@/components/VoiceProfiles';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <Navigation />
      
      <div className="pt-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              About Virtual AI Radio
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Pioneering the future of radio broadcasting with cutting-edge AI technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-blue-200 leading-relaxed">
                To revolutionize radio broadcasting by combining artificial intelligence with human creativity, 
                creating an engaging 24/7 experience that adapts to our community's interests and preferences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Technology Stack</h2>
              <ul className="text-blue-200 space-y-2">
                <li>• Murf AI for voice synthesis</li>
                <li>• React + Vite for frontend</li>
                <li>• Real-time streaming APIs</li>
                <li>• Community-driven content</li>
              </ul>
            </motion.div>
          </div>

          <VoiceProfiles />
        </div>
      </div>
    </div>
  );
};

export default About;
