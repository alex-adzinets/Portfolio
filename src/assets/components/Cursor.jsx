import useMousePosition from './useMousePosition'
import { motion } from 'framer-motion';


const Cursor = (props) => {

    const {isvisible,x,y} = useMousePosition();

    const dotVariants = {
        default : {width: 12, height: 12, x: x - 6, y: y - 6, transition: {duration: 0}},
        onHover : {width: 48, height: 48, x: x - 24, y: y - 24,mixBlendMode:'difference', transition:{duration: 0,}},
        dark    : {width: 12, height: 12, x: x - 6, y: y - 6, transition: {duration: 0},background: 'black'},
    }

    const ringVariants = {
        default : {width: 48, height: 48, x: x - 24, y: y - 24, transition: {}},
        onHover : {width: 48, height: 48, x: x - 24, y: y - 24, transition:{duration: 0.1}},
        dark    : {borderColor: 'black'},
    }

  return (
    <>
     {isvisible && 
     <motion.div
        variants={ dotVariants } 
        // eslint-disable-next-line react/prop-types
        animate = { props ? props.cursorState.state : 'default' }
        // eslint-disable-next-line react/prop-types
        className={'fixed bg-white rounded-full pointer-events-none z-[9999]'}>
      </ motion.div>}
      {isvisible && 
      <motion.div
        variants={ringVariants} 
        // eslint-disable-next-line react/prop-types
        animate = {props ? props.cursorState.state : 'default'} 
        className='fixed bg-transparent border rounded-full pointer-events-none z-[9999]'>
      </motion.div>} 
    </>
  )
}

export default Cursor
