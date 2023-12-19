import { motion } from 'framer-motion'
import external from '/images/icons/external.png'


const Portfoliolist = (props) => {

    const data = {
        1:
        {
            number: '01',
            title: 'My Portfolio',
            description:'A WebPage for Showcasing my Perivious Work developed Using React, Vite, TailwindCss and Framer  Motion ️⭐ ',
            link:'https://github.com/gururock007/Portfolio'
        },
        2:
        {
            number: '02',
            title: 'AI Magix Homepage',
            description:'Helped to Create an Intdustial standard home page,web page,developed using Angular ⛈️',
            link:'https://aimagix.com/'
        },
        3:
        {
            number: '03',
            title: 'Mobile Prediction',
            description:'Python-based model predicts smartphone prices with scikit-learn. Trained on features like RAM, camera, and battery, with data from a diverse device set.⚡️',
            link:'https://github.com/gururock007/mobile_price_prediction_model'
        },
        4:
        {
            number: '04',
            title: 'OTPfiy',
            description:'Your lightning-fast OTP solution for small projects, ditching complexity for instant verification magic. ✨',
            link: 'https://github.com/gururock007/OTPfiy'
        },
    }
    
    const variantBox = {
        inital: {y:100, opacity:0},
        default: {y:0, opacity:1,transition: {duration: 1}},
        hover: {background: 'white', color: '#1e1e1e', transition: {duration: 0.5}}
    }
    const variantButton = {
        inital: {},
        default:{},
        hover: {filter: 'invert(100)' }
    }
  return (
      <motion.div 
      viewport={{once: true, amount: 0.7}}
      initial = 'inital'
      whileInView='default'
      transition={{staggerChildren: 0.5}} 
      className=" text-center ps-10 pe-10 pb-4">
        {
            Object.keys(data).map((key) => (
                <a href={data[key].link} key={key}>
                    <motion.div
                        // eslint-disable-next-line react/prop-types
                        onMouseEnter={props.setCursorState[0]}
                        // eslint-disable-next-line react/prop-types
                        onMouseLeave={props.setCursorState[1]}
                        variants={variantBox}
                        whileHover={{scale:1.03, transition:{type: 'spring', stiffness:400, damping:13, duration: 0.5}}} 
                        whileTap={{scale:0.9}} 
                        className=" border-b-2 grid grid-cols-8 pt-4 pb-4 gap-5 items-center">
                        <div className=" md:text-6xl text-2xl font-Eklektyk ">
                            {data[key].number}
                        </div>
                        <div className=" font-Eklektyk md:text-5xl text-xl md:col-span-3 col-span-5">
                            {data[key].title}
                        </div>
                        <div className=" font-ClashDisplay text-start md:text-lg text-sm md:col-span-3 col-span-6">
                            {data[key].description}
                        </div>
                        <motion.div  className=' flex justify-end col-span-2 md:col-span-1'>
                            <motion.img className='w-14 '  variants={variantButton}  src={external} alt="" />
                        </motion.div>
                    </motion.div>
                </a>
            ))
        }
    </motion.div>
  )
}

export default Portfoliolist
