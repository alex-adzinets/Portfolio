import React from 'react';
import { motion } from 'framer-motion';

const AboutContent = () => {
  // Animation variants for content
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: 'easeOut'
      }
    }
  };

  // Animation variants for heading parts
  const aboutVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: 'easeOut'
      }
    }
  };

  const meVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="max-w-none w-full">
      {/* Animated Heading */}
      <div className="mb-8 lg:mb-12">
        <motion.h1 
          className="text-6xl md:text-7xl lg:text-[88px] font-normal text-white leading-[106.5px] font-inter"
          initial="hidden"
          animate="visible"
          variants={aboutVariants}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          ABOUT{' '}
          <motion.span
            variants={meVariants}
            className="border-[3px] border-black"
            style={{ opacity: 0 }}
          >
            ME
          </motion.span>
        </motion.h1>
      </div>
      
      {/* Body Text */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={contentVariants}
        className="space-y-4"
      >
        <p 
          className="text-white text-xl md:text-2xl lg:text-[28px] leading-[33.6px] font-normal"
          style={{ 
            fontFamily: 'Goldman, sans-serif',
            strokeWidth: '1px'
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutContent;