import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../src/assets/components/AnimatedText.jsx';
import AboutContent from './AboutContent.jsx';
import portraitImage from './assets/13_7.png';

const AboutHero = () => {
  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.3,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Left Panel - Text Content */}
        <div className="w-full lg:w-[56%] flex items-start justify-start px-8 md:px-12 lg:px-16 pt-16 lg:pt-[16vh]">
          <AboutContent />
        </div>

        {/* Right Panel - Image */}
        <motion.div 
          className="w-full lg:w-[44%] h-64 md:h-96 lg:h-full relative lg:absolute lg:right-0 lg:top-0"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <div className="absolute inset-0 bg-gray-900">
            <img 
              src={portraitImage}
              alt="Portrait of person sitting by window in black and white"
              className="w-full h-full object-cover object-center filter grayscale"
              loading="lazy"
            />
            {/* Overlay for consistent styling */}
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;