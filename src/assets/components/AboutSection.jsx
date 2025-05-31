/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import PortraitImage from './PortraitImage';

const AboutSection = () => {
  // Animation variants for "ABOUT" text
  const aboutVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Animation variants for "ME" text
  const meVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
    }
  };

  // Animation variants for paragraph text
  const paragraphVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }
    }
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1, delay: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="container mx-auto px-4 lg:px-8 h-full min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 h-full items-center">
          {/* Text Content Section */}
          <div className="flex flex-col justify-center py-12 lg:py-0 lg:pr-12 xl:pr-20 relative">
            {/* Title Section */}
            <div className="mb-8 lg:mb-12 relative">
              <motion.h1 
                className="text-[4rem] sm:text-[5rem] lg:text-[6rem] xl:text-[88px] leading-[1.2] font-normal mb-0"
                style={{ fontFamily: 'Inter, sans-serif' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={aboutVariants}
              >
                ABOUT
              </motion.h1>
              
              <motion.h1 
                className="text-[4rem] sm:text-[5rem] lg:text-[6rem] xl:text-[88px] leading-[1.2] font-normal"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  WebkitTextStroke: '3px #000000',
                  color: 'transparent'
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={meVariants}
              >
                ME
              </motion.h1>
            </div>
            
            <motion.p 
              className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] xl:text-[28px] leading-[1.2] text-white max-w-xl"
              style={{ 
                fontFamily: 'Goldman, sans-serif',
                WebkitTextStroke: '1px currentColor'
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={paragraphVariants}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.
            </motion.p>
          </div>

          {/* Portrait Image Section */}
          <motion.div 
            className="relative h-[400px] sm:h-[500px] lg:h-[704px] flex items-center justify-center lg:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <PortraitImage 
              src="/src/assets/components/assets/13_7.png"
              alt="Professional portrait in a modern workspace"
              className="w-full h-full max-w-[524px] object-cover lg:object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;