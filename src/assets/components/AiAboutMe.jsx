import React from 'react'
import AIchartbot from './AIchartbot'

const AiAboutMe = () => {
  return (
    <div className=' container mx-auto grid grid-cols-2 mt-[20vh] mb-[20vh]'>
        <div className=' lg:col-span-1 col-span-2 text-white text-3xl text-center'>
            <div className = " text-3xl font-ClashDisplay">
                Little About Me
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