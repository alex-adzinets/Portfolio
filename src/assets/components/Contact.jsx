import { motion } from "framer-motion";
import CursorBlinker from "./CursorBlinking"
import RedoAnimText from "./RedoAnimText";


const Contact = (props) => {

    const setHover = () => {
        // eslint-disable-next-line react/prop-types
        props.setCursorState((perval) => ({...perval,state:'onHover'}))
      }
    const setDefault = () => {
    // eslint-disable-next-line react/prop-types
    props.setCursorState((perval) => ({...perval,state:'default'}))
    }

  return (
    <section>
    <motion.div viewport={{once:true}}  initial ='inital' whileInView='final' className="font-ClashDisplay container pt-48 mx-auto text-white">
        <div className=" p-5  pb-14">
            <motion.div className=" md:text-8xl text-4xl font-Eklektyk">
                Let&apos;s team up to 
            </motion.div>
            <motion.div className=" md:text-8xl text-4xl font-Eklektyk">
                create something <span className=" font-GreatVibes inline">{(screen.width < 450) ? <br />: null}{( 800 < screen.width && screen.width < 1300) ? <br />: null}<RedoAnimText /></span><CursorBlinker/>
            </motion.div>
            <motion.div className=" text-3xl ">
                I&apos;m the perfect travel companion.
            </motion.div>
        </div>
        <div className="  p-5 pt-14 text-3xl" id="contact">
            Get in Touch
        </div>
        <div className=" grid grid-cols-12 gap-4 ps-5 pe-5 pb-12 ">
            <div className=" md:col-span-8 col-span-12 text-lg">
                <a
                onMouseEnter={setHover} 
                onMouseLeave={setDefault}  
                 href="mailto:gurushikjayakumar@gamil.com">
                    GurushikJayakumar@gmail.com
                </a>
            </div>
            <motion.div
            whileHover={{scale:1.1, transition:{type: 'spring', stiffness:400, damping:13, duration: 0.5}}} 
            whileTap={{scale:0.9}}
            className=" md:col-span-2 col-span-5 md:text-end">
                <a 
                href="https://github.com/gururock007" 
                target="_blank"
                rel=" noopener noreferrer"
                onMouseEnter={setHover} 
                onMouseLeave={setDefault}  
                className="  text-white  text-decoration-none socials-link">
                    <span className=" border-2 text-lg rounded-full p-2 ps-4 pe-4">
                        Git Hub
                    </span>
                </a>
            </motion.div>
            <motion.div 
            whileHover={{scale:1.1, transition:{type: 'spring', stiffness:400, damping:13, duration: 0.5}}} 
            whileTap={{scale:0.9}}
            className="md:col-span-2 col-span-6">
                <a 
                href="https://www.linkedin.com/in/gurushik-jayakumar/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={setHover} 
                onMouseLeave={setDefault}  
                 className=" text-white text-decoration-none socials-link">
                    <span className=" border-2 text-lg rounded-full p-2 ps-4 pe-4">
                        LinkedIn
                    </span>
                </a>
            </motion.div>
        </div>
    </motion.div>
</section>
  )
}

export default Contact
