
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import AudioPlayer from '@/components/AudioPlayer';
import NowPlaying from '@/components/NowPlaying';
import VoiceQueue from '@/components/VoiceQueue';
import AudioVisualizer from '@/components/AudioVisualizer';

const Listen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <Navigation />
      
      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Live Stream
            </h1>
            <p className="text-xl text-blue-200">
              Broadcasting live AI-generated content
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Now Playing & Visualizer */}
            <div className="lg:col-span-2 space-y-8">
              <AudioVisualizer />
              <NowPlaying />
              <AudioPlayer />
            </div>

            {/* Right Column - Queue */}
            <div className="lg:col-span-1">
              <VoiceQueue />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listen;
