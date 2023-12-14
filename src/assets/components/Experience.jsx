import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const Experience = () => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:['start end','end end']
  })

  const x = useTransform(
      scrollYProgress,
      [0.2 ,0.3],
      ["0%","-100%"]
  )

  const opacity1 = useTransform(
    scrollYProgress,
    [0.3,0.4],
    [0,1]
  )
  const y1 = useTransform(
    scrollYProgress,
    [0.3,0.4],
    ["0%", "-400%"]
  )
  const xForDetails1 = useTransform(
    scrollYProgress,
    [0.4,0.5],
    ["-100%", "0%"]
  )

  
  const opacity2 = useTransform(
    scrollYProgress,
    [0.5,0.6],
    [0,1]
  )
  const y2 = useTransform(
    scrollYProgress,
    [0.5,0.6],
    ["0%", "-250%"]
  )
  const xForDetails2 = useTransform(
    scrollYProgress,
    [0.6,0.7],
    ["-100%", "0%"]
  )

  const y3 = useTransform(
    scrollYProgress,
    [0.6,0.7],
    ["0%", "-120%"]
    )
  const opacity3 = useTransform(
    scrollYProgress,
    [0.6,0.7],
    [0,1]
    )
  const xForDetails3 = useTransform(
    scrollYProgress,
    [0.7,0.8],
    ["-100%", "0%"]
  )

  const y4 = useTransform(
    scrollYProgress,
    [0.7,0.8],
    ["0%", "0%"]
    )
  const opacity4 = useTransform(
    scrollYProgress,
    [0.7,0.8],
    [0,1]
    )
  const xForDetails4 = useTransform(
    scrollYProgress,
    [0.8,0.9],
    ["-100%", "0%"]
  )

  return (
    <div>
      <section ref={ref}  className="h-[300rem] ">
            <div  className=" container py-40 text-white sticky top-[10vh] px-4">
                <motion.div style={{ x }} className="">
                    <div className=" font-Eklektyk lg:text-[195px] md:text-9xl text-7xl">My</div>
                    <div className="font-Eklektyk lg:text-[195px] md:text-9xl text-7xl sticky">Experirence</div>
                </motion.div>
                <motion.div style={{opacity:opacity1, y:y1}}>
                  <div className=" text-5xl font-Eklektyk">
                    Frontend Dev
                  </div>
                  <motion.div style={{x:xForDetails1}} className=" font-LandRover text-sm">
                    <div>2023, sept -2023, Nov</div>
                    <div>@AIMagix</div>
                  </motion.div>
                </motion.div>
                <motion.div style={{opacity:opacity2, y:y2}}>
                  <div className=" text-5xl font-Eklektyk">
                    Frontend Dev
                  </div>
                  <motion.div style={{x:xForDetails2}} className=" font-LandRover text-sm">
                    <div>2023, sept -2023, Nov</div>
                    <div>@AIMagix</div>
                  </motion.div>
                </motion.div>
                <motion.div style={{opacity:opacity3, y:y3}}>
                  <div className=" text-5xl font-Eklektyk">
                    Frontend Dev
                  </div>
                  <motion.div style={{x:xForDetails3}} className=" font-LandRover text-sm">
                    <div>2023, sept -2023, Nov</div>
                    <div>@AIMagix</div>
                  </motion.div>
                </motion.div>
                <motion.div style={{opacity:opacity4, y:y4}}>
                  <div className=" text-5xl font-Eklektyk">
                    Frontend Dev
                  </div>
                  <motion.div style={{x:xForDetails4}} className=" font-LandRover text-sm">
                    <div>2023, sept -2023, Nov</div>
                    <div>@AIMagix</div>
                  </motion.div>
                </motion.div>
            </div>
        </section>
    </div>
  )
}

export default Experience
