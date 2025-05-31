import React from 'react';
import AnimatedText from './AnimatedText.jsx';
import portraitImage from './assets/13_7.png';
import './AboutMeSection.module.css';

const AboutMeSection = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white relative">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Heading with mixed typography */}
            <div className="flex items-baseline space-x-4 mb-12">
              <div className="text-white font-inter text-6xl md:text-7xl lg:text-8xl font-normal leading-tight tracking-wide">
                <AnimatedText 
                  text="ABOUT" 
                  animationType="fadeInRight" 
                  durations={0.8} 
                  staggerSpeed={0.1}
                />
              </div>
              <div className="text-6xl md:text-7xl lg:text-8xl font-inter font-normal leading-tight tracking-wide outlined-text">
                ME
              </div>
            </div>
            
            {/* Lorem ipsum content */}
            <div className="max-w-xl">
              <p className="text-white font-goldman text-xl md:text-2xl lg:text-3xl leading-relaxed font-normal animated-paragraph">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.
              </p>
            </div>
          </div>

          {/* Right Column - Portrait Image */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[704px] overflow-hidden">
              <img 
                src={portraitImage}
                alt="Portrait of a person sitting by a window in a casual setting"
                className="w-full h-full object-cover object-center filter grayscale"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;