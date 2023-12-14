import './App.css'
import Hero from './assets/components/Hero'
// import Aboutme from './assets/components/Aboutme'
import Skill from './assets/components/Skill'
import Cursor from './assets/components/Cursor' 
import { useEffect, useState } from 'react'
import Portfolio from './assets/components/Portfolio'
import Loader from './assets/components/loader'
import Contact from './assets/components/Contact'
// import Experience from './assets/components/Experience'
import NewAboutMe from './assets/components/NewAboutMe'
import Newexperience from './assets/components/Newexperience'

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
        <NewAboutMe setCursorState = {setCursorState} />
        {/* <Aboutme setCursorState={setCursorState} /> */}
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
