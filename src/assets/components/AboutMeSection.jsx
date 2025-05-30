/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';

const AboutMeSection = () => {
  // Animation variants for content
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
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

  const outlineTextVariants = {
    hidden: { opacity: 0, x: 50 },
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
    <section className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-screen relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 h-full items-center py-12 lg:py-0">
          {/* Left Content Section */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-6 lg:space-y-8 relative z-10">
            {/* Custom Animated Heading matching Figma design */}
            <div className="relative">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] xl:text-[88px] font-normal leading-[1.2] tracking-tight"
                style={{ fontFamily: 'Inter, sans-serif', lineHeight: '106.5px' }}
                initial="hidden"
                animate="visible"
                variants={titleVariants}
              >
                <span className="text-white">ABOUT </span>
                <motion.span 
                  className="text-transparent"
                  style={{ 
                    WebkitTextStroke: '3px white',
                    textStroke: '3px white'
                  }}
                  initial="hidden"
                  animate="visible"
                  variants={outlineTextVariants}
                >
                  ME
                </motion.span>
              </motion.h1>
            </div>
            
            {/* Description Text with Goldman font */}
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-white leading-relaxed max-w-2xl mt-8 lg:mt-12"
              style={{ 
                fontFamily: 'Goldman, sans-serif', 
                lineHeight: '33.6px',
                textStroke: '1px'
              }}
              initial="hidden"
              animate="visible"
              variants={contentVariants}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.
            </motion.p>
          </div>

          {/* Right Image Section */}
          <motion.div 
            className="order-1 lg:order-2 lg:col-span-5 relative h-[400px] sm:h-[500px] lg:h-[704px] lg:absolute lg:right-0 lg:top-0 lg:w-[44%]"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="relative h-full w-full overflow-hidden rounded-lg lg:rounded-none">
              <img
                src="/src/assets/components/assets/13_7.png"
                alt="Profile portrait in black and white showing a person sitting by a window"
                className="w-full h-full object-cover object-center filter grayscale"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="524" height="704" viewBox="0 0 524 704"%3E%3Crect width="524" height="704" fill="%23333"%3E%3C/rect%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23666"%3EImage Placeholder%3C/text%3E%3C/svg%3E';
                }}
              />
              {/* Optional overlay for better text contrast on mobile when stacked */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:hidden"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;