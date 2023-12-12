import Portfoliolist from './Portfoliolist'
import star from '/images/Vector1.svg'

const Portfolio = (props) => {

  const setDark = () => {
    // eslint-disable-next-line react/prop-types
    props.setCursorState((perval) => ({...perval,state:'onHover'}))
  }
  const setDefault = () => {
    // eslint-disable-next-line react/prop-types
    props.setCursorState((perval) => ({...perval,state:'default'}))
  }

  const portfolio = ["Portfolio", "Portfolio", "Portfolio"] 

  return (
    <div className=" pt-20 pb-20 text-white">
        <div className="flex justify-around">

          {
            portfolio.map((text) => (
              <>
              <div className=" font-GreatVibes text-3xl p-2">{text}</div>
              <div className=" p-2"><img  src={star} alt="" /></div>
              </>
            ))
          }
        </div>
        <div className=" text-2xl p-10 ">
            Selected Work
        </div>
        <Portfoliolist setCursorState = {[setDark,setDefault]} />
    </div>
  )
}

export default Portfolio
