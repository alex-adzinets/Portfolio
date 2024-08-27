
import { motion } from "framer-motion"
import download from '/images/icons/download.png'
import scrollDown from '/images/icons/down-arrow.png'
import AnimatedText from "./AnimatedText"
import CV from '/Gurushik_Resume.pdf'

const Hero = (props) => {

  const setHover = () => {
    // eslint-disable-next-line react/prop-types
    props.setCursorState((perval) => ({...perval,state:'onHover'}))
  }
  const setDefault = () => {
    // eslint-disable-next-line react/prop-types
    props.setCursorState((perval) => ({...perval,state:'default'}))
  }

  const fadeIn = {
    visible : {opacity:1, transition:{duration: 0.7}},
    hidden : {opacity:0, transition:{duration: 0.7}}
  }
  const fadeInRight = {
    visible : {opacity:1, x:0, transition:{duration: 0.7}},
    hidden : {opacity:0, x:-100, transition:{duration: 0.7}}
  }
  const fadeInLeft = {
    visible : {opacity:1, x:0, transition:{duration: 0.7}},
    hidden : {opacity:0, x:50, transition:{duration: 0.7}}
  }

  return (
    <motion.section 
    // style={{position: "fixed"}}
    initial = 'hidden' 
    whileInView = 'visible' 
    viewport={{once: true}}  
    className=" container mx-auto text-white ">
      <div className="p-4 flex justify-center text-center ">
        <motion.a 
        href={CV}
        download={CV} 
        variants={fadeIn}  
        whileHover={{scale:1.1, transition:{type: 'spring', stiffness:400, damping:13, duration: 0.5}}} 
        whileTap={{scale:0.9}} 
        onMouseEnter={setHover}
        onMouseLeave={setDefault}
        className='flex justify-center  gap-2 '>
          <span className=' text-xs' >
            Download CV
          </span>
          <span>
            <img src={download} className=' w-3 mt-0.5' alt="download.png" />
          </span>
        </motion.a>
      </div>
      <motion.div variants={fadeInRight} className=' md:text-3xl text-2xl md:pt-0 pt-8 font-RockSalt'>
        Gurushik Jayakumar
      </motion.div>
      <div className=' pt-28 md:text-9xl text-5xl font-semibold font-ClashDisplay'>
        <AnimatedText text="FRONTEND" animationType="fadeInUp" durations={0.7} staggerSpeed={0.2} />
      </div>
      <div className=' pt-2 ps-10 md:text-9xl text-5xl font-semibold Deleloper font-ClashDisplay text-transparent'>
        <AnimatedText text="DEVELOPER" animationType="fadeInUp" durations={0.7} staggerSpeed={0.2} />
      </div>
      <motion.div variants = {fadeInLeft} className=' pt-10 pe-10 text-right text-2xl font-ClashDisplay font-medium'>
        <span onMouseEnter={setHover} onMouseLeave={setDefault}>OPEN TO WORK</span>
      </motion.div>
      <div className='pt-32 pb-20 flex justify-center gap-2'>
        <div className=" ml-[-10%]">
              <motion.img className="bg-[#1e1e1e] absolute"  animate ={{y: [-20,10, -20], opacity:[0,1,0],transition:{duration:3,repeat: Infinity,ease:"anticipate"}}}  src={scrollDown} alt="scroll down png" />
              <motion.img className="bg-[#1e1e1e] absolute"  animate ={{y: [-20,0, -20], opacity:[0,1,0],transition:{duration:3,repeat: Infinity,ease:"anticipate"}}}  src={scrollDown} alt="scroll down png" />
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
