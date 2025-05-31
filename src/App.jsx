import './App.css'
import Hero from './assets/components/Hero'
// import Aboutme from './assets/components/Aboutme'
import Skill from './assets/components/Skill'
import Cursor from './assets/components/Cursor' 
import { useEffect, useState } from 'react'
import Portfolio from './assets/components/Portfolio'
import Loader from './assets/components/Loader'
import Contact from './assets/components/Contact'
// import Experience from './assets/components/Experience'
import AboutMeSection from './assets/components/AboutMeSection'
import Newexperience from './assets/components/Newexperience'
import AiAboutMe from './assets/components/AiAboutMe'

function App( ) {

  const [isloaded,setIsLoaded] = useState(false)


  useEffect(() => {
    window.addEventListener('load',setIsLoaded(true));
    return(() => {window.removeEventListener('load',setIsLoaded(true))})
  },[])


  const [cursorState,setCursorState] = useState({isdark: false ,state:'default'})

  
  return (
    <>
    {
    isloaded ?
    <main className=' lg:cursor-none'>
        {screen.width > 500 &&  <Cursor cursorState = {cursorState} />}
        <Hero setCursorState = {setCursorState} />
        <AboutMeSection setCursorState={setCursorState} />
        <AiAboutMe setCursorState = {setCursorState} />
        <Skill setCursorState = {setCursorState} />
        {/* <Experience setCursorState = {setCursorState} /> */}
        <Newexperience setCursorState = {setCursorState} />
        <Portfolio setCursorState = {setCursorState} />
        <Contact setCursorState = {setCursorState} />
    </main>: <Loader />}
    </>
  )
}

export default App
