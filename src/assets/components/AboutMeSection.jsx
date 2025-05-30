/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedText from '../src/assets/components/AnimatedText.jsx';

const AboutMeSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Content data
  const content = {
    aboutText: "ABOUT",
    meText: "ME",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices."
  };

  // Image source - actual asset path
  const imageSource = "./assets/13_7.png";

  // Animation variants
  const textVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  };

  const imageVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white overflow-hidden"
      aria-label="About Me Section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-screen">
        <div className="flex flex-col lg:flex-row items-start justify-between h-full min-h-screen py-12 lg:py-0">
          
          {/* Text Content Section */}
          <motion.div 
            className="w-full lg:w-[56%] z-10 mb-8 lg:mb-0 flex flex-col justify-start pt-[16vh] lg:pt-[16vh]"
            variants={textVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-none">
              {/* Animated Heading */}
              <div className="mb-8 lg:mb-12">
                {/* ABOUT Text */}
                <motion.h1 
                  className="font-inter text-[44px] sm:text-[60px] md:text-[72px] lg:text-[88px] font-normal leading-[1.21] tracking-normal text-white mb-0"
                  style={{ 
                    WebkitTextStroke: '1px white',
                    textStroke: '1px white'
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {content.aboutText}
                </motion.h1>
                
                {/* ME Text with outline effect */}
                <motion.h1 
                  className="font-inter text-[44px] sm:text-[60px] md:text-[72px] lg:text-[88px] font-normal leading-[1.21] tracking-normal ml-[27%] lg:ml-[27%]"
                  style={{ 
                    WebkitTextStroke: '3px black',
                    textStroke: '3px black',
                    color: 'transparent',
                    WebkitTextFillColor: 'transparent'
                  }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {content.meText}
                </motion.h1>
              </div>
              
              {/* Description Text */}
              <motion.p 
                className="font-goldman text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-normal leading-[1.2] text-white max-w-[90%] lg:max-w-[80%]"
                style={{ 
                  WebkitTextStroke: '1px white',
                  textStroke: '1px white'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {content.description}
              </motion.p>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="w-full lg:w-[44%] h-[50vh] lg:h-full flex items-start justify-end lg:justify-end pt-0 lg:pt-0"
            variants={imageVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-full lg:h-[704px] lg:w-[524px] max-w-full">
              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden">
                {/* Loading Skeleton */}
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                )}
                
                {/* Main Image */}
                <img
                  src={imageSource}
                  alt="Portrait of the person in a casual setting"
                  className={`w-full h-full object-cover object-center filter grayscale transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;