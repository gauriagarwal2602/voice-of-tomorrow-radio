
import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Play, Volume } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VoiceProfiles = () => {
  const voices = [
    {
      name: "AI Emma",
      personality: "Warm & Energetic",
      tone: "Friendly",
      specialties: ["Morning Shows", "Community Content", "Celebrations"],
      accent: "American",
      pitch: "Medium-High",
      emotion: "Upbeat",
      color: "from-pink-400 to-rose-500",
      description: "Emma brings warmth and energy to every broadcast, perfect for starting your day with positivity."
    },
    {
      name: "AI Dave",
      personality: "Professional & Authoritative",
      tone: "Confident",
      specialties: ["News", "Tech Updates", "Serious Topics"],
      accent: "British",
      pitch: "Medium-Low",
      emotion: "Steady",
      color: "from-blue-400 to-cyan-500",
      description: "Dave delivers news and information with clarity and authority, keeping you informed with trustworthy content."
    },
    {
      name: "AI Sarah",
      personality: "Calm & Soothing",
      tone: "Gentle",
      specialties: ["Wellness", "Meditation", "Evening Content"],
      accent: "Canadian",
      pitch: "Medium",
      emotion: "Peaceful",
      color: "from-green-400 to-emerald-500",
      description: "Sarah's calming presence helps you unwind and reflect, perfect for mindful moments and relaxation."
    },
    {
      name: "AI Marcus",
      personality: "Creative & Inspiring",
      tone: "Motivational",
      specialties: ["Inspiration", "Creativity", "Personal Growth"],
      accent: "Australian",
      pitch: "Medium",
      emotion: "Enthusiastic",
      color: "from-purple-400 to-violet-500",
      description: "Marcus inspires and motivates with creative insights and personal development content."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black/40 backdrop-blur-md rounded-xl p-8 border border-white/20"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Meet Our AI Voices</h2>
        <p className="text-blue-200 max-w-2xl mx-auto">
          Each AI voice has been carefully crafted with unique personalities, tones, and specialties 
          to bring diverse content to life throughout the day.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {voices.map((voice, index) => (
          <motion.div
            key={voice.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="flex items-start space-x-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${voice.color} flex items-center justify-center flex-shrink-0`}
              >
                <Mic className="w-8 h-8 text-white" />
              </motion.div>

              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-white mb-1">{voice.name}</h3>
                <p className="text-blue-300 font-medium mb-2">{voice.personality}</p>
                <p className="text-blue-200 text-sm leading-relaxed">{voice.description}</p>
              </div>
            </div>

            {/* Voice Characteristics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="text-sm font-semibold text-blue-300 mb-2">Voice Settings</h4>
                <div className="space-y-1 text-sm text-gray-300">
                  <div>Tone: <span className="text-white">{voice.tone}</span></div>
                  <div>Accent: <span className="text-white">{voice.accent}</span></div>
                  <div>Pitch: <span className="text-white">{voice.pitch}</span></div>
                  <div>Emotion: <span className="text-white">{voice.emotion}</span></div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-blue-300 mb-2">Specialties</h4>
                <div className="flex flex-wrap gap-1">
                  {voice.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Preview Button */}
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-300 hover:text-blue-200 hover:bg-white/5"
              >
                <Play className="w-4 h-4 mr-2" />
                Preview Voice
              </Button>
              
              <div className="flex items-center text-blue-400">
                <Volume className="w-4 h-4 mr-1" />
                <span className="text-sm">Sample ready</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Voice Rotation Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-white/10"
      >
        <h3 className="text-xl font-bold text-white mb-4 text-center">Dynamic Voice Rotation</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="font-semibold text-blue-300 mb-2">By Content Type</h4>
            <p className="text-sm text-gray-300">
              Voices are automatically selected based on content category for the most appropriate delivery
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-300 mb-2">By Time of Day</h4>
            <p className="text-sm text-gray-300">
              Morning energy with Emma, professional news with Dave, evening calm with Sarah
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-300 mb-2">Seamless Transitions</h4>
            <p className="text-sm text-gray-300">
              Smooth voice transitions with pre-announced introductions for natural flow
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VoiceProfiles;
