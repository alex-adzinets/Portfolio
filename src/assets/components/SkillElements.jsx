/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'

const SkillElements = (props) => {

  const variantBox = {
    inital: {y:100, opacity:0},
    default: {y:0, opacity:1,transition: {duration: 1}},
    hover: {background: 'white', color: '#1e1e1e', transition: {duration: 0.5}}
}

  return (
    <div className=' text-white p-4'>
        <div className=" text-2xl font-ClashDisplay font-medium pb-2 "> {props.title}</div>
        <motion.div
          viewport={{once:true, amount: 0.5}}
          initial = 'inital'
          whileInView= 'default'
          transition={{staggerChildren: 0.2}}
        >
          {props.lists.map((program) => (
            <motion.div
            variants={variantBox}
            className=' text-xl border-b-[0.1px] p-3 font-ClashDisplay font-light'
            key={program}>
              {program}
            </motion.div>
          ))}
        </motion.div>
    </div>
  )
}

export default SkillElements
