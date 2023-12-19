import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const Loader = () => {

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true)
    }, 3000)

    return () => clearTimeout(timeout)

  }, [isLoaded])

  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const loadingCircleVariants = {
    end: {
      y: [0,10,0],
    },
  }
  const loadingCircleTransition = {
    duration: 1.1,
    repeat: Infinity,
    ease: "easeInOut",
  }

  return (
    <div className=' h-screen flex justify-center items-center'>
      <div className=' text-center text-white'>
        <motion.div className=" text-3xl font-ClashDisplay">
          Preparing your Experience
        </motion.div>
        {/* {isLoaded ?
        <div className="pt-5">
          <button className=" font-ClashDisplay text-2xl border-2 px-5 py-1 rounded-full">start</button>
        </div>: */}
        <motion.div 
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
        className="flex gap-2 justify-center pt-5">
          <motion.div 
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
          className=" w-2 h-2 bg-white rounded-full" ></motion.div>
          <motion.div 
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
          className=" w-2 h-2 bg-white rounded-full" ></motion.div>
          <motion.div 
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
          className=" w-2 h-2 bg-white rounded-full" ></motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Loader
