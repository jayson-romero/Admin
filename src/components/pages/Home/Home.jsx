import SideBar from "../../sidebar/SideBar"
import TopBar from "../../topbar/TopBar"
import { Outlet } from "react-router-dom"

const Home = () => {
  return (
    <>
      <TopBar/>
      <div className="flex">
         <div 
         className=" fixed h-full w-[60px] lg:w-[300px]
         transition-all duration-500 hover:w-[300px]
         "><SideBar/></div>
         <div className="bg-light-blue w-[100%] h-full  ml-[60px] lg:ml-[300px] "><Outlet/></div>

      </div>
    </>
  )
}
export default Home  

// left-0 z-10 bg-light-blue w-[80px] transition-all duration-500 hover:w-[300px] 
//          lg:flex-none lg:w-[300px]

// fixed w-[100%] left-20 bg-dark-blue 
//          lg:flex-1 lg:relative lg:left-0