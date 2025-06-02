import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../src/assets/components/AnimatedText.jsx';

const AboutSection = ({ 
  heading = "ABOUT ME", 
  description = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.",
  imageUrl = "./assets/13_7.png",
  imageAlt = "Profile photo showing a person sitting by a window in a casual setting",
  className = "",
  isEditable = false 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const aboutText = heading.split(' ')[0] || "ABOUT";
  const meText = heading.split(' ')[1] || "ME";

  return (
    <section className={`relative w-full min-h-screen bg-black overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-screen py-12 lg:py-0">
          
          {/* Left Column - Text Content */}
          <motion.div 
            className="relative z-10 order-2 lg:order-1 lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Custom heading implementation to match Figma specs */}
            <div className="mb-8 lg:mb-12">
              <div className="flex flex-col md:flex-row items-start gap-2 md:gap-4 mb-8">
                <motion.h1 
                  className="text-white font-inter text-[3rem] md:text-[5.5rem] font-normal leading-[1.2] tracking-tight"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {aboutText}
                </motion.h1>
                <motion.h1 
                  className="text-white font-inter text-[3rem] md:text-[5.5rem] font-normal leading-[1.2] tracking-tight border-[3px] border-black bg-transparent"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    WebkitTextStroke: '3px black',
                    color: 'transparent'
                  }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {meText}
                </motion.h1>
              </div>
              
              <motion.p 
                className="text-white font-goldman text-[1.2rem] md:text-[1.75rem] font-normal leading-[1.2] max-w-[500px] text-left"
                style={{ 
                  fontFamily: 'Goldman, sans-serif',
                  textStroke: '1px'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {description}
              </motion.p>
            </div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div 
            className="relative order-1 lg:order-2 lg:col-span-5 h-[400px] sm:h-[500px] lg:h-[700px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full h-full">
              <div className="relative w-full h-full overflow-hidden">
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
                    <span className="text-gray-600">Loading...</span>
                  </div>
                )}
                
                {imageError ? (
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-600">Image could not be loaded</span>
                  </div>
                ) : (
                  <img
                    src={imageUrl}
                    alt={imageAlt}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    className={`w-full h-full object-cover object-center transition-opacity duration-500 grayscale ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                    style={{
                      aspectRatio: '44/100',
                      filter: 'grayscale(100%)'
                    }}
                  />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;