import React from 'react';
import AnimatedText from './AnimatedText.jsx';

const AboutMeSection = () => {
  // Content data - can be easily moved to props or CMS in future
  const aboutContent = {
    heading: "ABOUT ME",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.",
    imageUrl: "/src/assets/components/assets/13_7.png",
    imageAlt: "Professional portrait in a modern workspace"
  };

  return (
    <section className="min-h-screen bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Text Content Column */}
          <div className="order-2 lg:order-1 space-y-8 lg:space-y-12">
            {/* Animated Heading */}
            <div className="space-y-2 mt-[16vh] lg:mt-0">
              <div className="flex flex-wrap items-baseline">
                <div className="about-heading-text mr-4">
                  <AnimatedText 
                    text="ABOUT " 
                    animationType="fadeInRight" 
                    durations={0.8}
                    staggerSpeed={0.1}
                  />
                </div>
                <div className="about-heading-outlined">
                  <AnimatedText 
                    text="ME" 
                    animationType="fadeInLeft" 
                    durations={0.8}
                    staggerSpeed={0.1}
                  />
                </div>
              </div>
            </div>
            
            {/* Description Text */}
            <div className="max-w-lg mt-[19vh] lg:mt-8">
              <p className="about-description-text animate-fadeInUp">
                {aboutContent.description}
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2 lg:ml-[12%]">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[704px] overflow-hidden">
              <img
                src={aboutContent.imageUrl}
                alt={aboutContent.imageAlt}
                loading="lazy"
                className="w-full h-full object-cover object-center filter grayscale about-image"
              />
              {/* Optional overlay for better text contrast on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;