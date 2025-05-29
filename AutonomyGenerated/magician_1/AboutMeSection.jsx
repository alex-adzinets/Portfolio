/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../src/assets/components/AnimatedText.jsx';

const AboutMeSection = () => {
  // Animation variants for the description text
  const descriptionVariants = {
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

  // Animation variants for the image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.3,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8 lg:space-y-12">
            {/* Animated Heading */}
            <div className="relative">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal tracking-wider leading-tight">
                <span 
                  className="inline-block text-white"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '88px',
                    fontWeight: '400',
                    lineHeight: '106.5px',
                    WebkitTextStroke: '1px white',
                    textStroke: '1px white'
                  }}
                >
                  <AnimatedText 
                    text="ABOUT" 
                    animationType="fadeInRight" 
                    durations={0.8} 
                    staggerSpeed={0.1}
                  />
                </span>
                <span 
                  className="inline-block ml-4"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '88px',
                    fontWeight: '400',
                    lineHeight: '106.5px',
                    color: 'transparent',
                    WebkitTextStroke: '3px black',
                    textStroke: '3px black',
                    border: '3px solid black'
                  }}
                >
                  <AnimatedText 
                    text="ME" 
                    animationType="fadeInLeft" 
                    durations={0.8} 
                    staggerSpeed={0.1}
                  />
                </span>
              </h1>
            </div>

            {/* Description Text */}
            <motion.p
              className="text-white leading-relaxed max-w-lg text-left"
              style={{
                fontFamily: 'Goldman, sans-serif',
                fontSize: '28px',
                fontWeight: '400',
                lineHeight: '33.6px',
                WebkitTextStroke: '1px white',
                textStroke: '1px white'
              }}
              variants={descriptionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.
            </motion.p>
          </div>

          {/* Right Column - Image */}
          <motion.div
            className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src="./assets/13_7.png"
                alt="Portrait of a person sitting by a window in a casual setting"
                className="w-full h-full object-cover object-center filter grayscale"
                loading="lazy"
                style={{
                  width: '44%',
                  height: '100%',
                  position: 'absolute',
                  left: '56%',
                  top: '0%'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;