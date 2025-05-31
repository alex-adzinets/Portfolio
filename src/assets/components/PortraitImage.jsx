/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PortraitImage = ({ src, alt, className = '' }) => {
  const [imageState, setImageState] = useState('loading');
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Create new image instance for preloading
    const img = new Image();
    
    img.onload = () => {
      setImageSrc(src);
      setImageState('loaded');
    };
    
    img.onerror = () => {
      setImageState('error');
    };
    
    // Start loading
    img.src = src;

    return () => {
      // Cleanup
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  const imageVariants = {
    loading: { opacity: 0 },
    loaded: { opacity: 1 },
    error: { opacity: 0.5 }
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Loading skeleton */}
      {imageState === 'loading' && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}

      {/* Error state */}
      {imageState === 'error' && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <p className="text-gray-500 text-center px-4">
            Failed to load image
          </p>
        </div>
      )}

      {/* Loaded image */}
      {imageState === 'loaded' && imageSrc && (
        <motion.img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-cover filter grayscale ${className}`}
          initial="loading"
          animate="loaded"
          variants={imageVariants}
          transition={{ duration: 0.6 }}
          loading="lazy"
          style={{
            maxWidth: '524px',
            maxHeight: '704px'
          }}
        />
      )}

      {/* Decorative overlay for black and white aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
    </div>
  );
};

export default PortraitImage;