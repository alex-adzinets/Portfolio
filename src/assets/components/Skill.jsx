import AnimatedText from "./AnimatedText"
import SkillElements from "./SkillElements"
const Skill = () => {

  const programing = [
    "React Js","Python, Java", "photoShop, Figma", "GitHub, Canva", "Vs Code","Angular", "&More"]

  const soft = ["Team Work", "Communication","AdAapability","Curiosity", "Empathy", "Collaboration"]
  
  const hard = ["Research","Coding","Excel" ,"Power Point","Management"]

  return (
    <div  className="">
    <div className=" text-center text-3xl ps-5 text-white font-ClashDisplay font-bold pt-20">
      <AnimatedText text={"MY"} staggerSpeed={0.3} animationType={"fadeInDown"} durations={0.7} />
      <span> </span>
      <AnimatedText text={"SKILL"} staggerSpeed={0.3} animationType={"fadeInDown"} durations={0.7} />
    </div>
    <div className="pt-20 md:px-32 grid grid-cols-3">
            
            <div className=" md:col-span-1 col-span-3">
              <SkillElements title = {"Programing and Software"} lists = {programing}/>
            </div>
            <div className=" md:col-span-1 col-span-3">
              <SkillElements title = {"Soft"} lists = {soft}/>
            </div>
            <div className=" md:col-span-1 col-span-3">
              <SkillElements title = {"Hard"} lists = {hard}/>
            </div>
    </div>          
    </div>
  )
}

export default Skill
