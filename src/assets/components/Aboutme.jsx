import { motion } from "framer-motion"
import AnimatedText from "./AnimatedText"
const Aboutme = () => {

  const fadeInDown = {
    visible :{opacity: 1, y:0, transition:{duration: 0.7}},
    hidden :{opacity: 0, y:-50, transition:{duration: 0.7}}
  }
    
  return (
    <section className="">
      <div className=" container text-white mx-auto md:bg-me bg-no-repeat bg-contain bg-[97%] pb-60 ">
        <div className=' flex justify-center pt-48'>
          <span
          className=' md:text-8xl text-5xl  font-medium'>
            <AnimatedText text="ABOUT" animationType="fadeInRight" durations={0.5} staggerSpeed={0.2} />
          </span>
          <span
          className=' md:text-8xl text-5xl md:text-transparent text-white meme text-transparent font-semibold ps-2'>
            <AnimatedText text="ME" animationType="fadeInLeft" durations={0.7} staggerSpeed={0.5} />
          </span>
        </div>
        <motion.div
        variants={fadeInDown}
        initial = 'hidden'
          whileInView={'visible'}
          viewport={{once:true, amount: 0.5}}
        className='md:pt-12 mt-9 rounded-lg
         ps-9 md:text-2xl sm:text-lg md:w-1/2 sm:w-full'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices.
        </motion.div>
      </div>
    </section>
  )
}

export default Aboutme
