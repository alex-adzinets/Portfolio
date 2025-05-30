import React, { useState } from 'react';
import { motion } from 'framer-motion';
import profileImage from '/src/assets/components/assets/13_7.png';

const AboutSection = () => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section className="min-h-screen bg-black text-white overflow-hidden" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-16 lg:py-0">
          {/* Left Column - Text Content */}
          <div className="space-y-8 lg:pr-8">
            <motion.div className="space-y-2">
              <motion.h1 
                id="about-heading"
                className="text-[88px] font-normal leading-[106.5px] tracking-tight font-inter text-white"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  WebkitTextStroke: '1px #ffffff',
                  color: '#ffffff'
                }}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                ABOUT
              </motion.h1>
              <motion.h1 
                className="text-[88px] font-normal leading-[106.5px] tracking-tight font-inter"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  WebkitTextStroke: '3px #ffffff',
                  color: 'transparent',
                  opacity: 1
                }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                ME
              </motion.h1>
            </motion.div>
            
            <motion.p 
              className="text-[28px] leading-[33.6px] text-white max-w-2xl"
              style={{ 
                fontFamily: 'Goldman, sans-serif',
                WebkitTextStroke: '1px #ffffff',
                color: '#ffffff'
              }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.
            </motion.p>
          </div>

          {/* Right Column - Image */}
          <motion.div 
            className="relative h-[704px] w-full max-w-[524px] ml-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <div className="relative h-full w-full overflow-hidden">
              {imageError ? (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <p className="text-gray-400">Image failed to load</p>
                </div>
              ) : (
                <>
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
                      <p className="text-gray-400">Loading...</p>
                    </div>
                  )}
                  <img 
                    src={profileImage}
                    alt="Professional workspace with person sitting by window in modern office setting"
                    className="w-full h-full object-cover object-center filter grayscale"
                    loading="lazy"
                    onError={handleImageError}
                    onLoad={handleImageLoad}
                    style={{ display: imageLoaded ? 'block' : 'none' }}
                  />
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;