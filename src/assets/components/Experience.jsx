import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import aima from '/images/aima.png'
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

  const x1 = useTransform(
    scrollYProgress,
    [0.25, 0.4], //1
    ["100vw" , "3vw"]
  )
  const lgX1 = useTransform(
    scrollYProgress,
    [0.25, 0.35,0.5,0.6], //1
    ["100vw" , "3vw","3vw","-100vw"]
  )

  const opacity1 = useTransform(
    scrollYProgress,
    [0.25,0.4], //1 as x1
    [0,1]
  )
  const y1 = useTransform(
    scrollYProgress,
    [0.4,0.45],//.5 later opac
    [ "0vh","-10vh"]
  )
  const xForDetails1 = useTransform(
    scrollYProgress,
    [0.45,0.5],//.5 later y1
    ["-100%", "0%"]
  )
  const opacityForDetails1 = useTransform(
    scrollYProgress,
    [0.4,0.45], //.6 later  opac
    [0, 1]
  )

  const x2 = useTransform(
    scrollYProgress,
    [0.45, 0.6],
    ["100vw" , "3vw"]
  )
  const lgX2 = useTransform(
    scrollYProgress,
    [0.55, 0.65,0.8,0.9],
    ["100vw" , "3vw", "3vw","-100vw"]
  )

  const opacity2 = useTransform(
    scrollYProgress,
    [0.45,0.6],
    [0,1]
  )
  const y2 = useTransform(
    scrollYProgress,
    [0.6,0.65],
    [ "0vh","5vh"]
  )
  const xForDetails2 = useTransform(
    scrollYProgress,
    [0.65,0.7],
    ["-100%", "0%"]
  )
  const opacityForDetails2 = useTransform(
    scrollYProgress,
    [0.6,0.65],
    [0, 1]
  )

  const x3 = useTransform(
    scrollYProgress,
    [0.65, 0.8],
    ["100vw" , "3vw"]
  )
  const lgX3 = useTransform(
    scrollYProgress,
    [0.85, 0.9,1],
    ["100vw" , "3vw","3vw"]
  )
  const opacity3 = useTransform(
    scrollYProgress,
    [0.65,0.8],
    [0,1]
  )
  const y3 = useTransform(
    scrollYProgress,
    [0.8,0.85],
    [ "25vh","20vh"]
  )
  const xForDetails3 = useTransform(
    scrollYProgress,
    [0.85,0.9],
    ["-100%", "0%"]
  )
  const opacityForDetails3 = useTransform(
    scrollYProgress,
    [0.8,0.85],
    [0, 1]
  )
  const position1 = useTransform(
    scrollYProgress,
    (pos) => {
      return pos > 0.55 ? "absolute" : "absolute"
    }
    )
  const position2 = useTransform(
    scrollYProgress,
    (pos) => {
      return pos > 0.65 ? "absolute" : "absolute"
    }
    )
  const position3 = useTransform(
    scrollYProgress,
    (pos) => {
      return pos > 0.8 ? "absolute " : "absolute"
    }
    )
  

  return (
    <div>
      <section ref={ref}  className="h-[700rem]">
            <div  className=" container mx-auto py-40 pb-56 text-white sticky top-[10vh] px-4 overflow-hidden">
                <motion.div style={{ x }} className="">
                    <div className=" font-Eklektyk lg:text-[195px] md:text-9xl text-7xl">My</div>
                    <div className="font-Eklektyk lg:text-[195px] md:text-9xl text-7xl sticky">Experirence</div>
                </motion.div>
               {
               screen.width < 1000 ?
               <>
                <motion.div style={{ x: x1 , y: y1, opacity:opacity1}} className=" absolute mt-[-20%]">
                  <div className=" text-5xl font-Eklektyk">
                    Frontend Dev
                  </div>
                  <motion.div style={{x:xForDetails1, opacity:opacityForDetails1}} className=" font-LandRover text-sm">
                    <div>2023, sept -2023, Nov</div>
                    <div>@AIMagix</div>
                  </motion.div>
                </motion.div>
                <motion.div style={{ x: x2 , y: y2, opacity:opacity2}} className=" absolute mt-[-20%]">
                  <div className=" text-5xl font-Eklektyk">
                    Frontend Dev
                  </div>
                  <motion.div style={{x:xForDetails2, opacity:opacityForDetails2}} className=" font-LandRover text-sm">
                    <div>2023, sept -2023, Nov</div>
                    <div>@AIMagix</div>
                  </motion.div>
                </motion.div>
                <motion.div style={{ x: x3 , y: y3, opacity:opacity3}} className=" absolute mt-[-20%]">
                  <div className=" text-5xl font-Eklektyk">
                    Frontend Dev
                  </div>
                  <motion.div style={{x:xForDetails3, opacity:opacityForDetails3}} className=" font-LandRover text-sm">
                    <div>2023, sept -2023, Nov</div>
                    <div>@AIMagix</div>
                  </motion.div>
                </motion.div>
                </>:
               <>
                <motion.div style={{ position:position1, x:lgX1 }} className="mt-[-40%] grid grid-cols-3 items-center">
                  <div className=" col-span-1">
                    <div className=" text-6xl font-Eklektyk">
                      Frontend Dev <br /> Intern
                    </div>
                    <motion.div style={{}} className=" font-LandRover text-sm">
                      <div>2023, sept -2023, Nov</div>
                      <div>@AIMagix</div>
                    </motion.div>
                    <motion.div style={{ }}>
                      <ul className=" text-sm pt-8 flex-wrap list-disc leading-6">
                        <li className=" pb-4">Helped develop the company homepage using Angular, focusing on user experience and responsiveness.</li>
                        <li className=" pb-4">Implemented interactive features and animations using modern web technologies.</li>
                        <li className=" pb-4">Collaborated with senior developers to learn best practices and optimize code for performance.</li>
                      </ul>
                    </motion.div>
                  </div>
                    <div className=" p-10 w-full col-span-2">
                      <img src={aima}  alt="" />
                    </div>
                </motion.div>      
                <motion.div style={{position:position2, x: lgX2}} className=" mt-[-40%] grid grid-cols-3 items-center">
                  <div className=" col-span-1">
                    <div className=" text-6xl font-Eklektyk">
                    Machine Learning <br /> Intern
                    </div>
                    <motion.div style={{}} className=" font-LandRover text-sm">
                      <div>2023, sept -2023, Nov</div>
                      <div>@AIMagix</div>
                    </motion.div>
                    <motion.div style={{}}>
                      <ul className=" text-sm pt-8 flex-wrap list-disc leading-6">
                        <li className=" pb-4">Contributed to the development of an image recognition model, focusing on data pre-processing and feature engineering.</li>
                        <li className=" pb-4">Trained and evaluated different machine learning algorithms to achieve high accuracy on the target dataset.</li>
                        <li className=" pb-4">Gained practical experience with machine learning libraries and frameworks.</li>
                      </ul>
                    </motion.div>
                  </div>
                    <div className=" p-10 w-full col-span-2">
                      <img src={aima}  alt="" />
                    </div>
                </motion.div>      
                <motion.div style={{ position: position3, x: lgX3}} className="mt-[-40%] grid grid-cols-3 items-center">
                  <div className=" col-span-1">
                    <div className=" text-6xl font-Eklektyk">
                      Product Dev <br /> Intern
                    </div>
                    <motion.div style={{}} className=" font-LandRover text-sm">
                      <div>2023, sept -2023, Nov</div>
                      <div>@AIMagix</div>
                    </motion.div>
                    <motion.div style={{ }}>
                      <ul className=" text-sm pt-8 flex-wrap list-disc leading-6">
                        <li className=" pb-4">Played a key role in building the core functionalities of a new product, utilizing.</li>
                        <li className=" pb-4">Contributed to design discussions and user interface prototyping to ensure a seamless user experience.</li>
                        <li className=" pb-4">Developed and tested backend functionalities to support product features.</li>
                      </ul>
                    </motion.div>
                  </div>
                    <div className=" p-10 w-full col-span-2">
                      <img src={aima}  alt="" />
                    </div>
                </motion.div>      
                </>
                }
            </div>
        </section>
    </div>
  )
}

export default Experience
