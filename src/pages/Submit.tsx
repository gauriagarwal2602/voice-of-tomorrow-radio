
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import SubmitContentForm from '@/components/SubmitContentForm';

const Submit = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <Navigation />
      
      <div className="pt-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Submit Content
            </h1>
            <p className="text-xl text-blue-200">
              Share your message with our AI radio community
            </p>
          </motion.div>

          <SubmitContentForm />
        </div>
      </div>
    </div>
  );
};

export default Submit;
