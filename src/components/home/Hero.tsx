"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full mx-auto mb-8 border-4 border-white shadow-lg"
            priority
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Your Name
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto font-medium">
            Sr. Product Manager Portfolio
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/work"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            About + Connect
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <p className="text-gray-600 text-sm uppercase tracking-wider font-medium">
            Scroll to explore
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 