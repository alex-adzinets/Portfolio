import React from 'react'
import AIchartbot from './AIchartbot'

const AiAboutMe = ( props ) => {
    const setHover = () => {
        // eslint-disable-next-line react/prop-types
        props.setCursorState((perval) => ({...perval,state:'onHover'}))
      }
      const setDefault = () => {
        // eslint-disable-next-line react/prop-types
        props.setCursorState((perval) => ({...perval,state:'default'}))
      }

  return (
    <div className=' container mx-auto grid grid-cols-2 mt-[20vh] mb-[20vh]'>
        <div className=' lg:col-span-1 col-span-2 text-white text-3xl text-center grid grid-flow-row auto-rows-max'>
            <div
            onMouseEnter={setHover}
            onMouseLeave={setDefault} 
            className = " text-5xl font-medium font-ClashDisplay">
                Little About Me 
            </div>
            <div className='lg:text-xl md:text-lg text-sm items-center flex font-light font-LandRover p-3 h-[45vh] '>
                <p 
                onMouseEnter={setHover}
                onMouseLeave={setDefault} >
                Skilled electronic and communication engineering student with a knack for translating technical concepts into user-centric 
                experiences. Possesses strong foundations in Python and Java for backend 
                development, while specializing in frontend development using React and associated technologies. <br />
                <br />
                Proven problem-solving abilities, analytical thinking, and expertise in handling complex tasks 
                from conception to completion. Effective communicator of technical information to varied audiences.
                Thrives in dynamic work environments and is passionate about contributing to the development of innovative 
                products and services.
                </p>
            </div>
        </div>
        <div className=' lg:col-span-1 col-span-2'>
            <div className= ' container mx-auto text-center text-white p-5'>
                <div className=' text-3xl p-2 font-ClashDisplay font-medium'>
                    Personal Assistant
                </div>
                <div className=' text-base font-light font-LandRover'>
                    chart with my personal chart assistant to get to know me better
                </div>
            </div>
            <AIchartbot  />

        </div>
    </div>
  )
}

export default AiAboutMe