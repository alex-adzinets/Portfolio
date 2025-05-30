/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  // Animation variants for text elements
  const aboutVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const meVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1, delay: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content Column */}
          <div className="order-2 lg:order-1">
            <div className="mb-8 lg:mb-12">
              <motion.span 
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] font-normal leading-tight"
                style={{ fontFamily: 'Inter, sans-serif', strokeWidth: '1px' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={aboutVariants}
              >
                ABOUT{' '}
              </motion.span>
              <motion.span 
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] font-normal leading-tight"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  WebkitTextStroke: '3px #000000',
                  color: 'transparent',
                  strokeWidth: '1px'
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={meVariants}
              >
                ME
              </motion.span>
            </div>
            
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl xl:text-[28px] leading-relaxed text-white max-w-xl"
              style={{ 
                fontFamily: 'Goldman, sans-serif',
                lineHeight: '33.6px',
                strokeWidth: '1px'
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={textVariants}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.
            </motion.p>
          </div>

          {/* Image Column */}
          <motion.div 
            className="order-1 lg:order-2 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <div className="relative overflow-hidden">
              <img
                src="./assets/13_7.png"
                alt="Portrait of a person sitting by a window in a casual setting"
                className="w-full h-auto object-cover filter grayscale"
                loading="lazy"
                width="524"
                height="704"
              />
              {/* Optional overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;