
import { useEffect, useState } from 'react'

// https://medium.com/@jaredloson/custom-javascript-cursor-in-react-d7ffefb2db38
const useMousePosition = () => {
    const [position, setPosition] = useState({x: 0, y: 0})
    const [isvisible, setIsvisible] = useState(false)

    useEffect(() =>{
        const mouseMove = e => { 
            setPosition({ x: e.clientX, y: e.clientY})
          }
        const mousevisible = () => {
          setIsvisible(true)
        }
        const mouseinvisible = () => {
          setIsvisible(false)
        }

        window.addEventListener( 'mousemove', mouseMove);
        window.addEventListener( 'mouseenter', mouseMove);
        document.getElementById('root').addEventListener( 'mouseenter', mousevisible);
        document.getElementById('root').addEventListener( 'mouseleave', mouseinvisible);

        return (() =>{
          window.removeEventListener('mousemove', mouseMove);
          window.removeEventListener('mouseleave', mouseMove);
          document.getElementById('root').removeEventListener('mouseenter', mousevisible);
          document.getElementById('root').removeEventListener('mouseleave', mouseinvisible);
        })
    },[isvisible])

  return ({isvisible,...position})
}

export default useMousePosition 
