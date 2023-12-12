/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'

// eslint-disable-next-line react/prop-types
const AnimatedText = ({text, animationType, durations, staggerSpeed}) => {

  const fadeInUp = {
    visible :{opacity: 1, y:0, transition: {duration: durations, ease:"easeInOut"}},
    hidden :{opacity: 0, y:50 }
  }
  const fadeIn = {
    visible : {opacity:1,transition: {duration: durations, ease:"easeInOut"}},
    hidden : {opacity:0}
  }
  const fadeInRight = {
    visible : {opacity:1, x:0,transition: {duration: durations, ease:"easeInOut"}},
    hidden : {opacity:0, x:-100}
  }
  const fadeInLeft = {
    visible : {opacity:1, x:0,transition: {duration: durations, ease:"easeInOut"}},
    hidden : {opacity:0, x:50}
  }
  const fadeInDown = {
    visible :{opacity: 1, y:0,transition: {duration: durations, ease:"easeInOut"}},
    hidden :{opacity: 0, y:-50}
  }
  return (
    <>
      <div className=' sr-only'>{text}</div>
      <motion.div
        viewport={{once: true, amount:0.5}}
        initial = 'hidden'
        whileInView='visible'
        transition={{staggerChildren: staggerSpeed ? staggerSpeed : 0.1}}
        className=' inline-block'
        aria-hidden
      >
          {text.split('').map((char,index) => (
          <motion.div
            variants={
              animationType == "fadeInUp" ? fadeInUp :
              animationType == "fadeInDown" ? fadeInDown :
              animationType == "fadeInRight" ? fadeInRight :
              animationType == "fadeInLeft" ? fadeInLeft : fadeIn
             }
            className='inline-block'
            key={index}
          >
              {char}
          </motion.div>
            ))
          }
      </motion.div>
    </>
  )
}

export default AnimatedText
