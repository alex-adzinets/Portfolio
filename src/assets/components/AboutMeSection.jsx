/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import portraitImage from '/src/assets/components/assets/13_7.png';

const AboutMeSection = ({ 
  aboutText = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.",
  portraitImage: customPortraitImage,
  theme = "dark"
}) => {
  // Animation variants for the image
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for text elements
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const bodyTextVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start min-h-screen">
          {/* Left side - Text content */}
          <div className="relative z-10 py-12 lg:py-0 lg:pt-[16vh]">
            {/* Main Title */}
            <motion.div
              className="mb-8 lg:mb-12"
              initial="hidden"
              animate="visible"
              variants={titleVariants}
            >
              <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                <h1 
                  className="text-white font-inter text-4xl md:text-6xl lg:text-[88px] font-normal leading-tight md:leading-[106.5px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  ABOUT
                </h1>
                <h1 
                  className="text-transparent font-inter text-4xl md:text-6xl lg:text-[88px] font-normal leading-tight md:leading-[106.5px] border-white border-[3px] px-2"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    WebkitTextStroke: '3px white',
                    color: 'transparent'
                  }}
                >
                  ME
                </h1>
              </div>
            </motion.div>

            {/* Body Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={bodyTextVariants}
              className="max-w-lg"
            >
              <p 
                className="text-white text-lg md:text-xl lg:text-[28px] font-normal leading-relaxed lg:leading-[33.6px]"
                style={{ 
                  fontFamily: 'Goldman, sans-serif',
                  textStroke: '1px'
                }}
              >
                {aboutText}
              </p>
            </motion.div>
          </div>

          {/* Right side - Portrait image */}
          <motion.div
            className="relative h-[400px] sm:h-[500px] lg:h-screen lg:max-h-[704px] w-full lg:ml-auto"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            style={{ width: '100%', maxWidth: '524px' }}
          >
            <div className="relative h-full w-full overflow-hidden">
              {/* Image container with grayscale filter */}
              <img
                src={customPortraitImage || portraitImage}
                alt="Portrait of a person sitting by a window in a casual setting"
                className="absolute inset-0 w-full h-full object-cover object-center filter grayscale"
                loading="lazy"
                style={{
                  objectPosition: 'center center'
                }}
              />
              
              {/* Optional overlay for better text contrast on mobile when stacked */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent lg:hidden" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-95 pointer-events-none -z-10" />
    </section>
  );
};

export default AboutMeSection;