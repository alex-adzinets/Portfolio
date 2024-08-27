
import { motion, useScroll, useTransform } from 'framer-motion'
import vsme from '/images/vsme.png'
import { useRef } from 'react'
import AIchartbot from './AIchartbot'
const NewAboutMe = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })
    const opacity = useTransform(scrollYProgress, [0.1,0.2,0.8,1], [0,1,1,0])
    const scale = useTransform(scrollYProgress, [0.1, 0.6,0.8], [1, 1.5,1])
    const x = useTransform(
        scrollYProgress,
        [0.1, 0.25, 0.7, 1],
        ["0%", "-55%", "0%", "-10%"]
    )

  return (
    <>
    <section className='mt-[20vh]'>
        <div ref={ref} className='md:h-[200rem] h-[100rem] w-full'>
            <div className=' sticky top-[10vh]'>
                <div className=' flex justify-center'>
                    <div className=' text-white text-3xl'>
                        <AIchartbot></AIchartbot>
                    </div>
                    {/* <motion.div style={{ opacity, scale}} className=' origin-top'>
                        <img  className='md:h-[75vh] h-[45vh]' src={vsme} alt="" />
                    </motion.div> */}
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default NewAboutMe
