/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText.jsx';
import portraitImage from './assets/13_7.png';

const AboutSection = () => {
  // Animation variants for content
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for title parts
  const aboutVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const meVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full min-h-screen bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 lg:pt-16">
            {/* Animated Heading */}
            <div className="mb-8 md:mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-[88px] font-normal leading-[1.2] tracking-tight text-white"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    WebkitTextStroke: '1px white',
                    lineHeight: '106.5px'
                  }}
                  initial="hidden"
                  animate="visible"
                  variants={aboutVariants}
                >
                  ABOUT
                </motion.h1>
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-[88px] font-normal leading-[1.2] tracking-tight"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: 'transparent',
                    WebkitTextStroke: '3px white',
                    lineHeight: '106.5px'
                  }}
                  initial="hidden"
                  animate="visible"
                  variants={meVariants}
                >
                  ME
                </motion.h1>
              </div>
            </div>

            {/* Body Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              className="space-y-4 mt-8 lg:mt-16"
            >
              <p 
                className="text-lg md:text-xl lg:text-[28px] leading-relaxed text-white"
                style={{ 
                  fontFamily: 'Goldman, sans-serif',
                  lineHeight: '33.6px',
                  WebkitTextStroke: '1px white'
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Portrait Image */}
          <motion.div 
            className="order-1 lg:order-2"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[704px] overflow-hidden">
              <img
                src={portraitImage}
                alt="Portrait of the person in a casual setting"
                className="w-full h-full object-cover object-center filter grayscale"
                loading="lazy"
                style={{
                  width: '524px',
                  height: '704px',
                  objectFit: 'cover'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;