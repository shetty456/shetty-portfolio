"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section bg-white p-8 md:p-16">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg"
                alt="About Me"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  I&apos;m a Senior Product Manager with a passion for creating innovative
                  solutions that solve real-world problems. With years of experience in
                  product development and team leadership, I specialize in turning
                  complex ideas into successful products.
                </p>
                <p className="mb-8">
                  My approach combines strategic thinking with hands-on execution,
                  ensuring that every product I work on delivers value to both users
                  and businesses.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="/resume"
                    className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                  >
                    View Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 