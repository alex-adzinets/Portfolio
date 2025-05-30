/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText.jsx';
import portraitImage from './assets/13_7.png';

// Inner component that accepts props
const AboutMeSectionContent = ({ 
  title = "ABOUT ME",
  description = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.",
  imageUrl = portraitImage,
  imageAlt = "Portrait in workshop"
}) => {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 h-full items-center py-16 lg:py-0">
          
          {/* Left Column - Text Content */}
          <motion.div 
            className="text-white space-y-8 lg:space-y-12 order-2 lg:order-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Heading */}
            <div className="space-y-0">
              <div className="flex flex-wrap items-baseline font-inter">
                <div className="text-[3rem] md:text-[5.5rem] lg:text-[88px] font-normal leading-[1.2] tracking-tight">
                  <AnimatedText 
                    text="ABOUT" 
                    animationType="fadeInRight"
                    durations={0.6}
                    staggerSpeed={0.08}
                  />
                </div>
                <span className="mx-4 md:mx-6"></span>
                <div className="text-[3rem] md:text-[5.5rem] lg:text-[88px] font-normal leading-[1.2] tracking-tight opacity-0 border-[3px] border-black">
                  <AnimatedText 
                    text="ME" 
                    animationType="fadeInLeft"
                    durations={0.6}
                    staggerSpeed={0.08}
                  />
                </div>
              </div>
            </div>
            
            {/* Description Text */}
            <motion.p 
              className="font-goldman text-[18px] md:text-[24px] lg:text-[28px] font-normal leading-[1.2] text-white max-w-xl stroke-1"
              style={{ 
                WebkitTextStroke: '1px transparent',
                textStroke: '1px transparent'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Right Column - Portrait Image */}
          <motion.div 
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[704px] order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-full max-w-[524px] ml-auto">
              <img 
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-full object-cover object-center filter grayscale"
                loading="lazy"
                style={{ aspectRatio: '524/704' }}
              />
              {/* Optional overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Main component without props
const AboutMeSection = () => {
  return <AboutMeSectionContent />;
};

export default AboutMeSection;