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

    const btnVarition = {
        initial: {y:0, transition: {duration: 0.7}},
        onhover: { y: 50, transition:{duration: 0.7}}
    }
    

  return (
    <section>
    <motion.div className=" container pt-48 mx-auto text-white">
        <div className=" p-5  pb-14">
            <div className=" md:text-8xl text-4xl font-Eklektyk">
                Let&apos;s team up to 
            </div>
            <div className=" md:text-8xl text-4xl font-Eklektyk">
                create something <span className=" font-GreatVibes inline">{(screen.width < 450) ? <br />: null}{( 800 < screen.width && screen.width < 1300) ? <br />: null}<RedoAnimText /></span><CursorBlinker/>
            </div>
            <div className=" text-3xl ">
                I&apos;m the perfect travel companion.
            </div>
        </div>
        <div className=" p-5 pt-14 text-3xl" id="contact">
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
            <div className=" md:col-span-2 col-span-5 md:text-end">
                <motion.a 
                variants={btnVarition} whileHover='onhover' initial= 'initial'
                href="https://github.com/gururock007" 
                onMouseEnter={setHover} 
                onMouseLeave={setDefault}  
                className="  text-white  text-decoration-none socials-link">
                    <span 
                    className=" border-2 text-lg rounded-full p-2 ps-4 pe-4">
                    Git Hub
                    </span>
                </motion.a>
            </div>
            <div className="md:col-span-2 col-span-6">
                <a href="https://www.linkedin.com/in/gurushik-jayakumar/"
                onMouseEnter={setHover} 
                onMouseLeave={setDefault}  
                 className=" text-white text-decoration-none socials-link">
                    <span className=" border-2 text-lg rounded-full p-2 ps-4 pe-4">
                        LinkedIn
                    </span>
                </a>
            </div>
        </div>
    </motion.div>
</section>
  )
}

export default Contact
